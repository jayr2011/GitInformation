import "./App.css";
import { useState } from "react";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { User } from "./pages/user/user";
import MyContext from "./context/myContext";

function App() {
  const [userLogin, setUserLogin] = useState();
  return (
    <MyContext.Provider value={[userLogin, setUserLogin]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
