import React from "react";

import { Routes, Route } from "react-router-dom";

import AllActivitiesSection from "./AllActivites";
import DetailActivity from "./DetailActivity";

function MainActivitiesSection() {
    return (
        <Routes>
            <Route exact path="/" Component={AllActivitiesSection} />
            <Route exact path="/detail/:id" Component={DetailActivity} />
        </Routes>
    );
}

export default MainActivitiesSection;
