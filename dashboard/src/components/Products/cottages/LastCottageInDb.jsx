import React from "react";
import { Link } from "react-router-dom";

function LastActivity({ lastCottage }) {
    return (
        <div className="m-4 bg-5 p-3 shadow rounded-3">
            <h3 className="text-center bg-4 rounded py-2 fc-5">
                Ultima cabaña cargada
            </h3>
            <div className="row g-0">
                <figure className="col d-flex flex-column">
                    <img
                        style={{ width: "350px" }}
                        src={lastCottage.image}
                        className="img-fluid rounded m-auto"
                        alt={`Foto de perfíl de ${lastCottage.first_name} ${lastCottage.lastName}`}
                    />
                    <Link
                        to={`/cottages/detail/${lastCottage.id}`}
                        className="btn btn-primary bg-4 w-100 m-auto mt-2"
                        style={{ maxWidth: "350px" }}
                    >
                        Detalle
                    </Link>
                </figure>
                <div className="col-md-8 ">
                    <h4 className="card-title text-center mt-0 py-1">
                        {lastCottage.name}
                    </h4>
                    <h6 className="text-body text-center">
                        {lastCottage.description}
                    </h6>
                    <div className="d-flex flex-wrap m-auto">
                        <div className="col-md-8 m-auto">
                            <h6 className="text-body text-center">
                                Cupos máximos: {lastCottage.max_place}
                            </h6>
                            <h6 className="text-body text-center">
                                Creación: {lastCottage.createdAt.slice(0, 10)}
                            </h6>
                            <h6 className="text-body text-center">
                                id: {lastCottage.id}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastActivity;
