import React from "react";
import { Link } from "react-router-dom";

function CardActivity({ activity }) {
    return (
        <div
            className="card bg-5 p-2 text-center h-100"
            style={{ width: "14rem" }}
        >
            <figure className="mb-0">
                <h5 className="card-text">{activity.name}</h5>
                <img
                    style={{ width: "180px" }}
                    src={activity.image}
                    className="card-img-top m-auto"
                    alt={`Foto de perfíl de ${activity.name}`}
                />
            </figure>
            <div className="card-body p-0 d-flex align-items-center">
                <p className="card-text">{activity.description}</p>
            </div>
            <p className="card-text mb-0  border-top border-3">
                creación: {activity.createdAt.slice(0, 10)}
            </p>
            <p className="card-text mb-0">id: {activity.id}</p>
            <Link
                to={`/activities/detail/${activity.id}`}
                className="btn btn-primary bg-4"
            >
                Detalle
            </Link>
        </div>
    );
}

export default CardActivity;
