import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div className="container-lg mt-4 mb-4 m-auto bg-5 p-3">
            {user && (
                <div className="row g-0">
                    <h3 className="text-center">
                        {user.first_name} {user.last_name}
                    </h3>
                    <div className="col-md-4 d-flex flex-column">
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
                    <div className="col-md-8 d-flex flex-wrap justify-content-between">
                        <div className="card-body p-4">
                            <h6 className="card-text">
                                <b>{user.email}</b>
                            </h6>
                            <h6 className="card-text">
                                <b>creación:</b> {user.createdAt.slice(0, 10)}
                            </h6>
                            <h6 className="card-text">
                                <b>id:</b> {user.id}
                            </h6>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailUser;
