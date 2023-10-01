interface Column {
    id: "time" | "status" | "patient" | "actions";
    label?: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
}

export const columns: readonly Column[] = [
    { 
        id: "time",
        label: "Horário",
        minWidth: 70
    },
    {
        id: "patient",
        label: "Paciente",
        minWidth: 170,
        format: (value: number) => value.toLocaleString("en-US"),
    },
    { 
        id: "status",
        label: "Status",
        minWidth: 50
    },
    { 
        id: "actions",
        minWidth: 10,
        align: "right",
    },
];
// "time" | "status" | "type" | "Médico";
interface Data {
    time: string;
    status: string;
    patient: string;
    actions?: string;
}

function createData(
    time: string,
    patient: string,
    status: string,
    dataId: string,
): Data {
    return { time, status, patient, actions: dataId };
}
  
export const rows = [
    createData("14:30", "André", 'Consulta confirmada', '1'),
    createData("14:30", "André", 'Consulta confirmada', '1'),
    createData("14:30", "André", 'Horário vago ou ausente', '1'),
    createData("14:30", "André", 'Horário vago ou ausente', '1'),
    createData("14:30", "André", 'Consulta agendada', '1'),
    createData("14:30", "André", 'Consulta agendada', '1'),
    createData("14:30", "André", 'Atendido', '1'),
    createData("14:30", "André", 'Atendido', '1'),
    createData("14:30", "André", 'Sala de espera', '1'),
    createData("14:30", "André", 'Encaminha administração', '1'),
];
