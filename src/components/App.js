import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styled-components"
import AppContext from "./contexts/AppContext";
import Login from "./Login";
import Register from "./Register";
import History from "./History";
import NewEntry from "./NewEntry";

export default function App () {
    const [login, setLogin] = useState({});
    const [isIncome, setIsIncome] = useState(false);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <AppContext.Provider value={{login, setLogin, isIncome, setIsIncome}}>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/history" element={<History />}></Route>
                        <Route path="/input" element={<NewEntry />}></Route>
                    </Routes>
                </AppContext.Provider>
            </BrowserRouter>
        </>
    );
        
}
