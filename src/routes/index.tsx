import { Routes as Router, Route } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout";
import ExamBudget from "../pages/attendantPages/examBudget";
import HomePage from "../pages/home";
import PageNotFound from "../pages/pageNotFound";
import Patients from "../pages/doctorPages/patients";
import SearchAppointment from "../pages/attendantPages/searchAppointment";
import ConfirmConsult from "../components/Doctor/ConfirmConsult";
import Anamnese from "../components/Doctor/Anamnese";
import Exams from "../components/Doctor/Exams";
import ModalBookNewAppointment from "../components/modalBookNewAppointment";

const Routes = () => {
  return (
    <Router>
      <Route element={<DefaultLayout />} path="/">
        <Route element={<HomePage />} path={"/"} />
        <Route element={<ModalBookNewAppointment />} path={"/newAppointment"} />
        <Route element={<ExamBudget />} path={"/examBudget"} />
        <Route element={<SearchAppointment />} path={"/searchAppointment"} />
        <Route element={<Patients />} path={"/patients"} />
        <Route element={<ConfirmConsult />} path={"/consult/:id"} />
        <Route element={<Anamnese />} path={"/consult/:id/anamnese"} />
        <Route element={<Exams />} path={"/consult/:id/exams"} />
        <Route element={<PageNotFound />} path={"/*"} />
      </Route>
    </Router>
  );
};

export default Routes;
