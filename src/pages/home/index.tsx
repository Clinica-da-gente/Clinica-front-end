import LoginPage from "../login";
import DoctorPage from "../doctor";
import AttendantPage from "../attendant";
import AdminPage from "../admin";
import Header from "../../components/header";
import { useLogin } from "../../providers/login";
import { IPages } from "../../interfaces";
import { compareTimePassedSinceLastLogin } from "../../utils";

const pages = {
  doctor: <DoctorPage />,
  attendant: <AttendantPage />,
  admin: <AdminPage />,
  login: <LoginPage />,
};

const HomePage = () => {
  const { currentloggedUserType, logOut } = useLogin();

  const page: IPages = currentloggedUserType ? currentloggedUserType : "login";
  compareTimePassedSinceLastLogin(logOut);
  return (
    <>
      {page !== "login" && <Header />}
      {pages[page]}
    </>
  );
};

export default HomePage;
