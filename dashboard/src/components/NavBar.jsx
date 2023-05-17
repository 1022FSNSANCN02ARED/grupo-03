import React from "react";

import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img
                        src="/logo-domum.png"
                        alt="Logo DOMUM"
                        width={"80px"}
                    />
                </Link>

                <button
                    className="navbar-toggler bg-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                >
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <Link to="/users" className="nav-link active">
                                Usuarios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cottages" className="nav-link active">
                                Cabañas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/activities" className="nav-link active">
                                Actividades
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
