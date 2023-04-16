import React, { createContext, useContext, useState, useEffect } from "react";

import { IPatient, IProvider } from "../../interfaces";

import { getAllPatients } from "../../services";

const PatientsContext = createContext<any>({} as any);

export const PatientsProvider = ({ children }: any) => {
  const [patients, setPatients] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPatients = async () => {
    // setIsLoading(true);
    try {
      const res = await getAllPatients();
      setPatients(res);
    } catch (err) {
      return false;
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    fetchPatients();
  }, [setPatients]);

  const reload = () => {
    fetchPatients();
  };

  return (
    <PatientsContext.Provider
      value={{
        patients,
        isLoading,
        reload,
        setPatients,
        fetchPatients,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatients = () => useContext(PatientsContext);
