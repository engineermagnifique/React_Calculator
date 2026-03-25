import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CalCulator from "./calculator";
import Exam from "./Quiz";
import ToDoApp from "./components/Todo";
import FormValidate from "./components/validate";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="bg-gray-200 p-4 flex gap-4">
        <Link to="/" className="text-blue-600 hover:underline">CalCulator</Link>
        <Link to="/todo" className="text-blue-600 hover:underline">Todo</Link>
        <Link to="/exam" className="text-blue-600 hover:underline">exam</Link>
        <Link to="/validate" className="text-blue-600 hover:underline">Validate</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CalCulator />} />
        <Route path="/todo" element={<ToDoApp />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/validate" element={<FormValidate/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;