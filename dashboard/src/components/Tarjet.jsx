import React, { useState, useEffect } from "react";

function Tarjet() {
    const [activities, setActivities] = useState(null);
    const [users, setUsers] = useState(null);
    const [cottages, setCottages] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    useEffect(() => {
        const fetchActivities = fetch(
            "http://localhost:3000/api/activities"
        ).then((response) => response.json());
        const fetchUsers = fetch("http://localhost:3000/api/users").then(
            (response) => response.json()
        );
        const fetchCottages = fetch("http://localhost:3000/api/cottages").then(
            (response) => response.json()
        );

        Promise.all([fetchActivities, fetchUsers, fetchCottages])
            .then(([resultActivities, resultUsers, resultCottages]) => {
                setActivities(resultActivities);
                setUsers(resultUsers);
                setCottages(resultCottages);
                setIsloading(false);
            })
            .catch((error) => {
                setIsloading(false);

                console.log(
                    "Ocurrió un error en alguna de las solicitudes:",
                    error
                );
            });
    }, []);

    if (isLoading) {
        return <p>cargando...</p>;
    }

    return (
        <div>
            {activities && users && cottages ? (
                <div className="row mt-5 justify-content-center">
                    <div className="mb-4 " style={{ maxWidth: "500px" }}>
                        <div className="card border-left-primary shadow h-100 p-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Cantidad De Usuario
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {users.count}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 " style={{ maxWidth: "500px" }}>
                        <div className="card border-left-success shadow h-100 p-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Cantidad De Cabañas
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {cottages.count}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-award fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 " style={{ maxWidth: "500px" }}>
                        <div className="card border-left-warning shadow h-100 p-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Cantidad De Actividades
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                                            {activities.count}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className=" fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>error en el servidor</p>
            )}
        </div>
    );
}

export default Tarjet;
