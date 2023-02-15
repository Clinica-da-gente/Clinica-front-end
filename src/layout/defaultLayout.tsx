import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { IPages } from "../interfaces";
import { useLogin } from "../providers/login";

const DefaultLayout = () => {
  const { currentloggedUserType, logOut } = useLogin();

  const page: IPages = currentloggedUserType ? currentloggedUserType : "login";
  return (
    <>
      {page !== "login" && <Header />}
      <Outlet />
    </>
  );
};

export default DefaultLayout;
