import React from "react";
import "./App.css";
import Cottages from "./components/Cottages";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Tarjet from "./components/Tarjet";

import MainUsersSection from "./components/UsersSection/MainUsersSection";
import MainActivitiesSection from "./components/Products/activities/MainActivitiesSection";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route exact path="/" Component={Tarjet} />
                <Route exact path="/users/*" Component={MainUsersSection} />
                <Route
                    exact
                    path="/activities/*"
                    Component={MainActivitiesSection}
                />
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
