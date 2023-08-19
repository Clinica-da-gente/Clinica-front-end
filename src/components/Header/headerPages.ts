import HomeIcon from '@mui/icons-material/Home';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BiotechIcon from '@mui/icons-material/Biotech';
import SavingsIcon from '@mui/icons-material/Savings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { IScreenType } from '../../interfaces';

const headerDoctorPages = [
  { name: "Página Inicial", icon: HomeIcon, screenName: "home" as IScreenType },
]

const headerAttendantPages = [
  { name: "Página Inicial", icon: HomeIcon, screenName: "home" as IScreenType },
  { name: "Nova Consulta", icon: PendingActionsIcon, screenName: "newAppointment" as IScreenType },
  { name: "Orçamento de Exames", icon: MedicationLiquidIcon, screenName: "examBudged" as IScreenType },
  { name: "Pesquisar Consultas", icon: ContentPasteSearchIcon, screenName: "searchAppointments" as IScreenType },
  { name: "Pacientes", icon: PeopleAltIcon, screenName: "patients" as IScreenType },
];
  
const headerAdminPages = [
  { name: "Página Inicial", icon: HomeIcon, screenName: "home" as IScreenType },
  { name: "Nova Consulta", icon: PendingActionsIcon, screenName: "newAppointment" as IScreenType },
  { name: "Orçamento de Exames", icon: MedicationLiquidIcon, screenName: "examBudged" as IScreenType },
  { name: "Pesquisar Consultas", icon: ContentPasteSearchIcon, screenName: "searchAppointments" as IScreenType },
  { name: "Pacientes", icon: PeopleAltIcon, screenName: "patients" as IScreenType },
  { name: "Médicos", icon: LocalHospitalIcon, screenName: "doctors" as IScreenType },
  { name: "Exames", icon: BiotechIcon, screenName: "exams" as IScreenType },
  { name: "Banco", icon: SavingsIcon, screenName: "bank" as IScreenType },
  { name: "Receita", icon: AttachMoneyIcon, screenName: "profit" as IScreenType },
  { name: "Despesa", icon: MoneyOffIcon, screenName: "dept" as IScreenType },
]

export const headerPages = {
  "admin": [...headerAdminPages], 
  "doctor": [...headerDoctorPages], 
  "attendant": [...headerAttendantPages],
  "none": [],
}
