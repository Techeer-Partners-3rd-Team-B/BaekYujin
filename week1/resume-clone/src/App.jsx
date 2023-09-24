import Home from "./Home";
import Resume from "./Resume";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
