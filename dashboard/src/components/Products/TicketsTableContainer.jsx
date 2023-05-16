import React, { useEffect, useState } from "react";

function TickersTableContainer({ userId }) {
    const [tickets, setTickets] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/users/tickets/${userId}`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setTickets(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center text-break align-middle">
                        Actividad
                    </th>
                    <th className="text-center text-break align-middle">Día</th>
                    <th className="text-center text-break align-middle">
                        Horario
                    </th>
                    <th className="text-center text-break align-middle">
                        Cantidad
                    </th>
                    <th className="text-center text-break align-middle">
                        Fecha de compra
                    </th>
                    <th className="text-center text-break align-middle">
                        Total
                    </th>
                    <th className="text-center text-break align-middle">
                        id carrito
                    </th>
                </tr>
            </thead>
            <tbody>
                {tickets &&
                    tickets.map((ticket, i) => {
                        return (
                            <tr key={ticket.activity.name + i}>
                                <th className="text-center text-break align-middle">
                                    {ticket.activity.name}
                                </th>
                                <td className="text-center text-break align-middle">
                                    {ticket.hour}
                                </td>
                                <td className="text-center text-break align-middle">
                                    {ticket.day}
                                </td>
                                <td className="text-center text-break align-middle">
                                    {ticket.quantity}
                                </td>
                                <td className="text-center text-break align-middle">
                                    {ticket.updatedAt.slice(0, 10)}
                                </td>
                                <td className="text-center text-break align-middle">
                                    ARS${ticket.total_cost}
                                </td>
                                <td className="text-center text-break align-middle">
                                    {ticket.cart_id}
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default TickersTableContainer;
