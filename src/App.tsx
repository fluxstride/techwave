import { BrowserRouter as Router, Routes, Route } from "react-router";
import Register from "./pages/Register";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
