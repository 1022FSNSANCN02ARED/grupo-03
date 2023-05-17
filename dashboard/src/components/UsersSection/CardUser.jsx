import React from "react";
import { Link } from "react-router-dom";

function CardUser({ user }) {
    return (
        <div className="card bg-5 p-2 text-center" style={{ width: "14rem" }}>
            <figure className="mb-0">
                <h5 className="card-text">
                    {user.first_name} {user.last_name}
                </h5>
                <img
                    style={{ width: "180px" }}
                    src={user.avatar}
                    className="card-img-top m-auto"
                    alt={`Foto de perfíl de ${user.first_name} ${user.lastName}`}
                />
            </figure>
            <div className="card-body ">
                <p className="card-text mb-0">rol: {user.rol.name}</p>
                <p className="card-text mb-0">{user.email}</p>
                <p className="card-text mb-0">
                    creación: {user.createdAt.slice(0, 10)}
                </p>
                <p className="card-text mb-0">id: {user.id}</p>
            </div>
            <Link
                to={`/users/detail/${user.id}`}
                className="btn btn-primary bg-4"
            >
                Detalle
            </Link>
        </div>
    );
}

export default CardUser;
