import React from "react";
import "./App.css";
import Cottages from "./components/Cottages";
import NavBar from "./components/NavBar";
import MainUsersSection from "./components/UsersSection/MainUsersSection";
import { Route, Routes } from "react-router-dom";
import Tarjet from "./components/Tarjet";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route exact path="/" Component={Tarjet} />
                <Route exact path="/users/*" Component={MainUsersSection} />
            </Routes>

            <header className="App-header">
                <main>
                    <Cottages />
                </main>
            </header>
        </div>
    );
}

export default App;
