import React from "react";
import { Link } from "react-router-dom";

function CardUser({ user }) {
    return (
        <div className="card bg-5 p-2 text-center" style={{ width: "14rem" }}>
            <img
                style={{ width: "180px" }}
                src={user.avatar}
                className="card-img-top m-auto"
                alt={`Foto de perfíl de ${user.first_name} ${user.lastName}`}
            />
            <div className="card-body">
                <h5 className="card-text">
                    {user.first_name} {user.last_name}
                </h5>
                <p className="card-text">{user.email}</p>
                <p className="card-text">
                    creada: {user.createdAt.slice(0, 10)}
                </p>
            </div>
            <Link to={user.detail} className="btn btn-primary bg-4">
                Detalle
            </Link>
        </div>
    );
}

export default CardUser;
