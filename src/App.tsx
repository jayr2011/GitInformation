import { useState } from "react";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { User } from "./pages/user/user";
import MyContext from "./context/myContext";
import GlobalStyle from "./GlobalStyle";
import AvatarContext from "./context/avatarContext";

function App() {
  const [userLogin, setUserLogin] = useState([]);
  const [avatar, setAvatar] = useState([]);
  return (
    <MyContext.Provider value={[userLogin, setUserLogin]}>
      <AvatarContext.Provider value={[avatar, setAvatar]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyle />
      </AvatarContext.Provider>
    </MyContext.Provider>
  );
}

export default App;
