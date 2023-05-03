import { createContext, useContext, useMemo, useState } from "react";
import { IProvider, IDoctorContext, IConsult } from "../../interfaces";

const DoctorContext = createContext({} as IDoctorContext);

export const DoctorProvider = ({ children }: IProvider) => {
  const [consults, setConsults] = useState([
    {
      id: "8ca251fe-18e1-4a47-b90c-cf69a264d243",
      horario: "09:00",
      paciente: "Paciente 1",
      data_nascimento: "10/10/2010",
    },
  ]);
  const [consultSelected, setConsultSelected] = useState<
    IConsult | undefined
  >();

  const changeConsultSelected = (consult: IConsult | undefined) => {
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
      }}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctor = () => useContext(DoctorContext);
