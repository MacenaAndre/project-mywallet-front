import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styled-components"
import AppContext from "./contexts/AppContext";
import Login from "./Login";
import Register from "./Register";

export default function App () {
    const [login, setLogin] = useState({});

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <AppContext.Provider value={{login, setLogin}}>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                    </Routes>
                        
                </AppContext.Provider>
            </BrowserRouter>
        </>
    );
        
}
