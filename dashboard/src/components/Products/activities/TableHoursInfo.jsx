import React from "react";
import TableRow from "./TableRow";

function TableHoursInfo({ activity }) {
    const hours = activity.hours;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Horaios</th>
                    <th className="text-center">Primer horario</th>
                    <th className="text-center">Segundo horario</th>
                </tr>
            </thead>
            {activity && (
                <tbody>
                    <TableRow
                        description={"Día de semana"}
                        firstHours={hours.weekday_hours || "sin horario"}
                        secondHours={
                            hours.second_weekday_hours || "sin horario"
                        }
                    />
                    <TableRow
                        description={"Fin de semana"}
                        firstHours={hours.weekend_hours || "sin horario"}
                        secondHours={
                            hours.second_weekend_hours || "sin horario"
                        }
                    />
                </tbody>
            )}
        </table>
    );
}

export default TableHoursInfo;
