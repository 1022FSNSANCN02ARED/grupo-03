import React from "react";
function TableRow({ description, firstHours, secondHours }) {
    return (
        <tr>
            <th className="text-center text-break align-middle p-1">
                {description}
            </th>
            <td className="text-center text-break align-middle p-1">
                {firstHours}
            </td>
            <td className="text-center text-break align-middle p-1">
                {secondHours}
            </td>
        </tr>
    );
}

export default TableRow;
