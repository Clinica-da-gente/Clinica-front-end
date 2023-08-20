import { createContext, useContext, useMemo, useState } from "react";
import { IDoctorContext, IConsult2, IExame } from "../../interfaces/Doctor";
import { IProvider } from "../../interfaces";
import api from "../../services";

const DoctorContext = createContext({} as IDoctorContext);

export const DoctorProvider = ({ children }: IProvider) => {
    const [consultsWaiting, setConsultsWaiting] = useState<
    IConsult2[] | undefined
  >();
    const [consultsToday, setConsultsToday] = useState<IConsult2[] | undefined>();
    const [consultSelected, setConsultSelected] = useState<
    IConsult2 | undefined
  >();
    const [exams, setExams] = useState<IExame[] | undefined>([]);

    const changeConsultSelected = (consult: IConsult2 | undefined) => {
        if (consult) {
            localStorage.setItem(
                "@Doctor_currentConsultSelected",
                JSON.stringify(consult),
            );
        } else {
            localStorage.removeItem("@Doctor_currentConsultSelected");
        }
        setConsultSelected(consult);
    };

    const getConsults = async () => {
        setConsultsToday(undefined);
        const result = await api.get("/consultas/doctor", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("@UserToken"),
            },
        });
        const array1: IConsult2[] = [];
        const array2: IConsult2[] = [];

        result.data.forEach((value: any) => {
            if (value.status == "sala de espera") {
                array1.push(value);
            } else {
                array2.push(value);
            }
        });

        setConsultsWaiting(array1);
        setConsultsToday(array2);
    };

    useMemo(() => {
        const consult = localStorage.getItem("@Doctor_currentConsultSelected");

        if (consult) {
            setConsultSelected(JSON.parse(consult));
        }
        api.get("/exames").then(({ data }) => setExams(data));
    }, []);

    return (
        <DoctorContext.Provider
            value={{
                consultsWaiting,
                consultsToday,
                consultSelected,
                exams,
                changeConsultSelected,
                getConsults,
            }}>
            {children}
        </DoctorContext.Provider>
    );
};

export const useDoctor = () => useContext(DoctorContext);
