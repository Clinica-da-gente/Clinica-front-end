import React, { createContext, useContext, useState, useEffect } from "react";

import api from "../../services";
import { toast } from "react-hot-toast";

const AppointmentContext = createContext<any>({} as any);

export const AppointmentProvider = ({ children }: any) => {
  const [patients, setPatients] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [editPatient, setEditPatient] = useState<any>(null);

  const updatePatientAux = async () => {
    const token = localStorage.getItem("@UserToken");
    setIsLoading(true);
    try {
      await api.patch(`pacientes/${editPatient._id}`, editPatient, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Paciente atualizado sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro, tente novamente!");
    } finally {
      setIsLoading(false);
      setSelectedPatient(editPatient);
      setEditPatient(null);
    }
  };

  return (
    <AppointmentContext.Provider
      value={{
        patients,
        isLoading,
        setPatients,
        selectedPatient,
        setSelectedPatient,
        editPatient,
        setEditPatient,
        updatePatientAux,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => useContext(AppointmentContext);
