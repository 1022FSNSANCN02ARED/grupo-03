import React from "react";

import { Routes, Route } from "react-router-dom";

import AllCottagesSection from "./AllCottages";
import DetailCottage from "./DetailCottage";

function MainCottagesSection() {
    return (
        <Routes>
            <Route exact path="/" Component={AllCottagesSection} />
            <Route exact path="/detail/:id" Component={DetailCottage} />
        </Routes>
    );
}

export default MainCottagesSection;
