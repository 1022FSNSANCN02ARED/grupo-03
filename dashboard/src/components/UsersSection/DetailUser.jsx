import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RentsTableContainer from "../Products/users/RentsTableContainer";
import TickersTableContainer from "../Products/users/TicketsTableContainer";

function DetailUser() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/users/detail/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setUser(result.data);
            });
    }, []);

    return (
        <div className="container-lg mt-4 mb-4 m-auto bg-5 p-3 shadow">
            {user && (
                <div className="row g-0">
                    <h3 className="text-center bg-4 rounded py-2 fc-5">
                        {user.first_name} {user.last_name}
                    </h3>
                    <div className="col d-flex flex-column">
                        <img
                            style={{ width: "280px" }}
                            src={user.avatar}
                            className="img-fluid rounded-start m-auto"
                            alt={`Foto de perfíl de ${user.first_name} ${user.lastName}`}
                        />
                        <h6 className="text-center pt-2">
                            Rol: {user.rol.name}
                        </h6>
                    </div>

                    <div className="col-md-8 m-auto">
                        <div className="card-body text-center">
                            <h6 className="card-text">correo: {user.email}</h6>
                            <h6 className="card-text">
                                <b>creación:</b> {user.createdAt.slice(0, 10)}
                            </h6>
                            <h6 className="card-text">
                                <b>id:</b> {user.id}
                            </h6>
                        </div>
                    </div>

                    <div className="bg-6">
                        <h4 className="text-center border-3 bg-4 fc-5 border-bottom border-top p-2">
                            Alquileres
                        </h4>
                        {user.rents.length > 0 ? (
                            <RentsTableContainer userId={user.id} />
                        ) : (
                            <h6 className="text-center">
                                Este usuario no tiene alquileres registrados...
                            </h6>
                        )}
                    </div>
                    <div className="bg-6">
                        <h4 className="text-center border-3 bg-4 fc-5 border-bottom border-top p-2">
                            Tickets
                        </h4>
                        {user.tickets.length > 0 ? (
                            <TickersTableContainer userId={user.id} />
                        ) : (
                            <h6 className="text-center">
                                Este usuario no tiene compras registradas...
                            </h6>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailUser;
