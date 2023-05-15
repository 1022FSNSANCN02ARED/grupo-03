import React from "react";
import "./App.css";
import Cottages from "./components/Cottages";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />

            <header className="App-header">
                <main>
                    <Cottages />
                </main>
            </header>
        </div>
    );
}

export default App;
