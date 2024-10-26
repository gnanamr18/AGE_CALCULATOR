import Home from "./pages/Home";
import Result from "./pages/Result";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
