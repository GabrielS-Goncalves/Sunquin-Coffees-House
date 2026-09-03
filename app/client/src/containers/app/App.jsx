import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../home/home";
import Header from "../../components/header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
