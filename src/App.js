import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CalCulator from "./calculator";
import Exam from "./Quiz";
import ToDoApp from "./components/Todo";
import FormValidate from "./components/validate";
import Challenge1 from "./components/challenge1";
import Challenge2 from "./components/challenge2";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="bg-gray-200 p-4 flex gap-4">
        <Link to="/" className="text-blue-600 hover:underline">CalCulator</Link>
        <Link to="/todo" className="text-blue-600 hover:underline">Todo</Link>
        <Link to="/exam" className="text-blue-600 hover:underline">exam</Link>
        <Link to="/validate" className="text-blue-600 hover:underline">Validate</Link>
        <Link to="/challenge1" className="text-blue-600 hover:underline">Challenge1</Link>
        <Link to="/challenge2" className="text-blue-600 hover:underline">Challenge2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CalCulator />} />
        <Route path="/todo" element={<ToDoApp />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/validate" element={<FormValidate/>}/>
        <Route path="/challenge1" element={<Challenge1 />} />
        <Route path="/challenge2" element={<Challenge2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;