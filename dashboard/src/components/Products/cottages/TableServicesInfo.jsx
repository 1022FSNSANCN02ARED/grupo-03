import React from "react";

function TableServices({ cottage }) {
    return (
        <div className="d-flex flex-wrap">
            {cottage &&
                cottage.services.map((service, i) => {
                    return (
                        <p className="w-25 text-break d-flex align-items-center justify-content-center text-center m-0 border border-2 py-3">
                            {service}
                        </p>
                    );
                })}
        </div>
    );
}

export default TableServices;
