import { BrowserRouter as Router, Routes, Route } from "react-router";
import Register from "./pages/Register";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
