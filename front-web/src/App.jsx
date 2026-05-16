import LoginPage from "./components/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Nenomon from "./components/Nenomon/nenomon";
import Objetos from "./components/Objetos/objetos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/nenomon" element={<Nenomon />} />
      <Route path="/objetos" element={<Objetos />} />
    </Routes>
  );
}

export default App;