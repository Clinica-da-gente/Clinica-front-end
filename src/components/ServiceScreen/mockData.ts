interface Column {
    id: "date" | "specialty" | "type" | "doctor" | "actions";
    label?: string;
    minWidth?: number;
    align?: "right";
}

export const columns: readonly Column[] = [
  { 
    id: "date",
    label: "Horário",
    minWidth: 70
  },
  {
    id: "doctor",
    label: "Médico",
    minWidth: 170,
  },
  { 
    id: "specialty",
    label: "Especialidade",
    minWidth: 100
  },
  {
    id: "type",
    label: "Tipo Atendimento",
    minWidth: 170,
  },
  { 
    id: "actions",
    minWidth: 10,
    align: "right",
  },
];
// "date" | "specialty" | "type" | "Médico";
interface Data {
    date: string;
    specialty: string;
    type: string;
    doctor: string;
    actions?: string;
}

function createData(
  date: string,
  specialty: string,
  type: string,
  doctor: string,
  dataId: string,
): Data {
  return { date, specialty, type, doctor, actions: dataId };
}
  
export const rows = [
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
  createData("14:30", "IN", '1324171354', 'Dr Jean', '1'),
];
