import React, { useEffect, useState } from "react";

function ProductTableContainer({ userId }) {
    const [rents, setRents] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/users/rents/${userId}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result.data);
                setRents(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center text-break align-middle p-1">
                        Cabaña
                    </th>
                    <th className="text-center text-break align-middle p-1">
                        Check in
                    </th>
                    <th className="text-center text-break align-middle p-1">
                        Check out
                    </th>
                    <th className="text-center text-break align-middle p-1">
                        Huéspedes
                    </th>
                    <th className="text-center text-break align-middle p-1">
                        Fecha de creación
                    </th>
                    <th className="text-center text-break align-middle p-1">
                        Total
                    </th>
                    <th className="text-center text-break align-middle p-1">
                        id carrito
                    </th>
                </tr>
            </thead>
            <tbody>
                {rents &&
                    rents.map((rent, i) => {
                        return (
                            <tr key={rent.cottage.name + i}>
                                <th className="text-center text-break align-middle p-1">
                                    {rent.cottage.name}
                                </th>
                                <td className="text-center text-break align-middle p-1">
                                    {rent.date_in.slice(0, 10)}
                                </td>
                                <td className="text-center text-break align-middle p-1">
                                    {rent.date_out.slice(0, 10)}
                                </td>
                                <td className="text-center text-break align-middle p-1">
                                    {rent.guests}
                                </td>
                                <td className="text-center text-break align-middle p-1">
                                    {rent.updatedAt.slice(0, 10)}
                                </td>
                                <td className="text-center text-break align-middle p-1">
                                    ARS${rent.total_cost}
                                </td>
                                <td className="text-center text-break align-middle p-1">
                                    {rent.cart_id}
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default ProductTableContainer;
