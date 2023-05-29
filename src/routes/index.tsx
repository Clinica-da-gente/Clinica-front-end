import { Routes as Router, Route, useNavigate } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout";
import ExamBudget from "../pages/examBudget";
import HomePage from "../pages/home";
import NewAppointment from "../pages/newAppointment";
import PageNotFound from "../pages/pageNotFound";
import Patients from "../pages/patients";
import SearchAppointment from "../pages/searchAppointment";
import ConfirmConsult from "../components/Doctor/ConfirmConsult";
import Anamnese from "../components/Doctor/Anamnese";
import Exams from "../components/Doctor/Exams";
import { RecipePDF } from "../components/Doctor/RecipePDF";

const Routes = () => {
  return (
    <Router>
      <Route element={<DefaultLayout />} path='/'>
        <Route element={<HomePage />} path={"/"} />
        <Route element={<NewAppointment />} path={"/newAppointment"} />
        <Route element={<ExamBudget />} path={"/examBudget"} />
        <Route element={<SearchAppointment />} path={"/searchAppointment"} />
        <Route element={<Patients />} path={"/patients"} />
        <Route element={<ConfirmConsult />} path={"/consult/:id"} />
        <Route element={<Anamnese />} path={"/consult/:id/anamnese"} />
        <Route element={<Exams />} path={"/consult/:id/exams"} />
        <Route element={<RecipePDF />} path={"/pdf"} />
        <Route element={<PageNotFound />} path={"/*"} />
      </Route>
    </Router>
  );
};

export default Routes;
