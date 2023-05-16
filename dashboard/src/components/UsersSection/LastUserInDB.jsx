import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LastUser({ lastUser }) {
    useEffect(() => {}, []);

    return (
        <div className="card m-4 bg-5 p-3 shadow">
            <h3 className="text-center">Ultimo usuario cargado</h3>
            <div className="row g-0">
                <div className="col-md-4 d-flex flex-column">
                    <img
                        style={{ width: "280px" }}
                        src={lastUser.avatar}
                        className="img-fluid rounded-start m-auto"
                        alt={`Foto de perfíl de ${lastUser.first_name} ${lastUser.lastName}`}
                    />
                    <Link
                        to={`/users/detail/${lastUser.id}`}
                        className="btn btn-primary bg-4 w-100 m-auto mt-2"
                        style={{ maxWidth: "280px" }}
                    >
                        Detalle
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {lastUser.first_name} {lastUser.last_name}
                        </h5>
                        <h6 className="text-body">Correo: {lastUser.email}</h6>
                        <h6 className="text-body">
                            Creación: {lastUser.createdAt.slice(0, 10)}
                        </h6>
                        <h6 className="text-body">id: {lastUser.id}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastUser;
