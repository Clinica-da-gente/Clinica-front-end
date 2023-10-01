import { Container } from "@mui/material";
import ServiceScreen from "../../../components/ServiceScreen";
import { useLogin } from "../../../providers/login";
import Patients from "../../patients";
import ExamBudget from "../../examBudget";
import SearchAppointment from "../../searchAppointment";
import NewAppointment from "../../newAppointment";

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
