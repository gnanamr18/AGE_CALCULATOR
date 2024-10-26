import Home from "./pages/Home";
import Result from "./pages/Result";
import NotFound from "./component/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </div>
  );
}

export default App;
