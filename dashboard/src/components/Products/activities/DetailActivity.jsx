import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImagesContainer from "../ImagesContainer";
import TableHoursInfo from "./TableHoursInfo";

function DetailUser() {
    const { id } = useParams();
    const [activity, setActivity] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/api/activities/detail/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setIsLoading(false);
                setActivity(result.data);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
    }, []);

    if (isLoading) {
        return <p>cargando...</p>;
    }

    return (
        <div className="container-lg mt-4 mb-4 m-auto bg-5 p-3 shadow">
            {activity && (
                <div className="row g-0">
                    <h3 className="text-center bg-4 rounded py-2 fc-5">
                        {activity.name}
                    </h3>
                    <div className="col d-flex flex-column">
                        <img
                            style={{ width: "280px" }}
                            src={activity.images[0]}
                            className="img-fluid rounded-start m-auto"
                            alt={`Foto de perfíl de ${activity.name}`}
                        />
                        <h6 className="text-center pt-2">id: {activity.id}</h6>
                    </div>

                    <div className="col-md-8 ">
                        <h4 className="card-title text-center mt-0 py-1">
                            {activity.name}
                        </h4>
                        <h6 className="text-body text-center">
                            {activity.description}
                        </h6>
                        <div className="d-flex flex-wrap m-auto">
                            <div className="col-md-8 m-auto">
                                <h6 className="text-body text-center">
                                    Cupos máximos: {activity.max_place}
                                </h6>
                                <h6 className="text-body text-center">
                                    Creación: {activity.createdAt.slice(0, 10)}
                                </h6>
                                <h6 className="text-body text-center">
                                    Precio: ARS$ {activity.price}
                                </h6>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-center border-3 bg-4 fc-5 border-bottom border-top p-2">
                        Imagenes
                    </h4>
                    <ImagesContainer product={activity} />
                    <h4 className="text-center border-3 bg-4 fc-5 border-bottom border-top p-2">
                        Horarios
                    </h4>
                    <TableHoursInfo activity={activity} />
                </div>
            )}
        </div>
    );
}

export default DetailUser;
