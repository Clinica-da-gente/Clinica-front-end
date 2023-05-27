import { Routes as Router, Route, Navigate } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout";
import ExamBudget from "../pages/examBudget";
import HomePage from "../pages/home";
import NewAppointment from "../pages/newAppointment/components/listDoctorAvailability";
import PageNotFound from "../pages/pageNotFound";
import Patients from "../pages/patients";
import SearchAppointment from "../pages/searchAppointment";

const Routes = () => {
  return (
    <Router>
      <Route element={<DefaultLayout />} path="/">
        <Route element={<HomePage />} path={"/"} />
        <Route element={<NewAppointment />} path={"/newAppointment"} />
        <Route element={<ExamBudget />} path={"/examBudget"} />
        <Route element={<SearchAppointment />} path={"/searchAppointment"} />
        <Route element={<Patients />} path={"/patients"} />
        <Route element={<PageNotFound />} path={"/*"} />
      </Route>
    </Router>
  );
};

export default Routes;
