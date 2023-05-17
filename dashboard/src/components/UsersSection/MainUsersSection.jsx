import React from "react";

import { Routes, Route } from "react-router-dom";

import AllUsersSection from "./AllUsers";
import DetailUser from "./DetailUser";

function MainUserSection() {
    return (
        <Routes>
            <Route exact path="/" Component={AllUsersSection} />
            <Route exact path="/detail/:id" Component={DetailUser} />
        </Routes>
    );
}

export default MainUserSection;
