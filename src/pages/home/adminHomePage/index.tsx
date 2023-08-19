import { Container } from "@mui/material";
import ServiceScreen from "../../../components/ServiceScreen";
import { useLogin } from "../../../providers/login";
import Patients from "../../doctorPages/patients";
import ExamBudget from "../../attendantPages/examBudget";
import SearchAppointment from "../../attendantPages/searchAppointment";
import NewAppointment from "../../attendantPages/newAppointment";

const AdminPage = () => {
  const { currentScreen } = useLogin();

  const allScreens = {
    home: ServiceScreen,
    newAppointment: NewAppointment,
    examBudged: ExamBudget,
    searchAppointments: SearchAppointment,
    patients: Patients,
    doctors: ServiceScreen,
    exams: ServiceScreen,
    bank: ServiceScreen,
    profit: ServiceScreen,
    dept: ServiceScreen,
  };

  const Screen = currentScreen ? allScreens[currentScreen] : allScreens.home;

  return (
    <Container sx={{ margin: "80px auto 40px" }}>
      <Screen />
    </Container>
  );
};

export default AdminPage;
