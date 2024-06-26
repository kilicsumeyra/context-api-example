import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
function App() {
  const [user, setUser]= useState("");
  return (
    <LoginContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="people" element={<People />} />
          <Route path="people/:id" element={<PrivateRouter />}>
            <Route path="" element={<PersonDetail />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
