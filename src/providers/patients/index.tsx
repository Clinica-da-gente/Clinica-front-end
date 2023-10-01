import React, { createContext, useContext, useState, useEffect } from "react";

import { IPatient, IProvider } from "../../interfaces";

import api from "../../services";
import { toast } from "react-hot-toast";

const PatientsContext = createContext<any>({} as any);

export const PatientsProvider = ({ children }: any) => {
    const [patients, setPatients] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedPatient, setSelectedPatient] = useState<any>(null);
    const [editPatient, setEditPatient] = useState<any>(null);

    const fetchPatients = async () => {
    // setIsLoading(true);
        try {
            const res = await api.get("/pacientes").then((res) => res.data);

            setPatients(res);
        } catch (err) {
            return false;
        }
    // setIsLoading(false);
    };

    const reload = () => {
        fetchPatients();
    };

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

    useEffect(() => {
        fetchPatients();
    }, [setPatients]);

    return (
        <PatientsContext.Provider
            value={{
                patients,
                isLoading,
                reload,
                setPatients,
                fetchPatients,
                selectedPatient,
                setSelectedPatient,
                editPatient,
                setEditPatient,
                updatePatientAux,
            }}
        >
            {children}
        </PatientsContext.Provider>
    );
};

export const usePatients = () => useContext(PatientsContext);
