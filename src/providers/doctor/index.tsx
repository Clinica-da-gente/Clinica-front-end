import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IDoctorContext, IConsult, IConsult2 } from "../../interfaces/Doctor";
import { IProvider } from "../../interfaces";
import api from "../../services";
import { Navigate } from "react-router-dom";

const DoctorContext = createContext({} as IDoctorContext);

export const DoctorProvider = ({ children }: IProvider) => {
  const [consults, setConsults] = useState<IConsult2[] | undefined>();
  const [consultSelected, setConsultSelected] = useState<
    IConsult2 | undefined
  >();

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
    setConsults(undefined);
    const result = await api.get("/consultas/doctor", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@UserToken"),
      },
    });
    setConsults(result.data);
  };

  useMemo(() => {
    const consult = localStorage.getItem("@Doctor_currentConsultSelected");
    if (consult) {
      setConsultSelected(JSON.parse(consult));
    }
  }, []);

  return (
    <DoctorContext.Provider
      value={{
        consults,
        consultSelected,
        changeConsultSelected,
        getConsults,
      }}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctor = () => useContext(DoctorContext);
