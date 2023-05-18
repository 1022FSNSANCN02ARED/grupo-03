import React from "react";
import { Link } from "react-router-dom";

function LastActivity({ lastActivity }) {
    return (
        <div className="m-4 bg-5 p-3 shadow rounded-3">
            <h3 className="text-center bg-4 rounded py-2 fc-5">
                Ultima actividad cargada
            </h3>
            <div className="row g-0">
                <figure className="col d-flex flex-column">
                    <img
                        style={{ width: "350px" }}
                        src={lastActivity.image}
                        className="img-fluid rounded m-auto"
                        alt={`Foto de perfíl de ${lastActivity.first_name} ${lastActivity.lastName}`}
                    />
                    <Link
                        to={`/activities/detail/${lastActivity.id}`}
                        className="btn btn-primary bg-4 w-100 m-auto mt-2"
                        style={{ maxWidth: "350px" }}
                    >
                        Detalle
                    </Link>
                </figure>
                <div className="col-md-8 ">
                    <h4 className="card-title text-center mt-0 py-1">
                        {lastActivity.name}
                    </h4>
                    <h6 className="text-body text-center">
                        {lastActivity.description}
                    </h6>
                    <div className="d-flex flex-wrap m-auto">
                        <div className="col-md-8 m-auto">
                            <h6 className="text-body text-center">
                                Cupos máximos: {lastActivity.max_place}
                            </h6>
                            <h6 className="text-body text-center">
                                Creación: {lastActivity.createdAt.slice(0, 10)}
                            </h6>
                            <h6 className="text-body text-center">
                                id: {lastActivity.id}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastActivity;
