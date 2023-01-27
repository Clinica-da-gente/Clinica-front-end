import { Routes as Router, Route } from "react-router-dom";
import HomePage from "../pages/home";
import PageNotFound from "../pages/pageNotFound";

const Routes = () => {
  return (
    <Router>
      <Route element={<HomePage />} path={"/"} />
      <Route element={<PageNotFound />} path={"/*"} />
    </Router>
  );
};

export default Routes;
