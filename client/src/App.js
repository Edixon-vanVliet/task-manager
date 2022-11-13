import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, EditTask } from "./pages";

export const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/task/:id" element={<EditTask />} />
    </Routes>
  </Router>
);
