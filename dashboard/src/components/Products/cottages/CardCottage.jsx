import React from "react";
import { Link } from "react-router-dom";

function CardActivity({ cottage }) {
    return (
        <div
            className="card bg-5 p-2 text-center h-100"
            style={{ width: "14rem" }}
        >
            <figure className="mb-0">
                <h5 className="card-text">{cottage.name}</h5>
                <img
                    style={{ width: "180px" }}
                    src={cottage.image}
                    className="card-img-top m-auto"
                    alt={`Foto de perfíl de ${cottage.name}`}
                />
            </figure>
            <div className="card-body p-0 d-flex align-items-center">
                <p className="card-text">{cottage.description}</p>
            </div>
            <p className="card-text mb-0  border-top border-3">
                creación: {cottage.createdAt.slice(0, 10)}
            </p>
            <p className="card-text mb-0">id: {cottage.id}</p>
            <Link
                to={`/cottages/detail/${cottage.id}`}
                className="btn btn-primary bg-4"
            >
                Detalle
            </Link>
        </div>
    );
}

export default CardActivity;
