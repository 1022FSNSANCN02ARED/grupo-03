import React, { useEffect, useState } from "react";
import LastCottage from "./LastCottageInDb";
import CottagesList from "./CottagesList";

function AllCottagesSection() {
    const [cottages, setCottages] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/api/cottages")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setisLoading(false);
                setCottages(result);
            })
            .catch((error) => {
                setisLoading(false);
                console.log(error);
            });
    }, []);

    if (isLoading) {
        return <p>cargando...</p>;
    }

    return (
        <div className="container-xl">
            {cottages && (
                <LastCottage lastCottage={cottages.data[cottages.count - 1]} />
            )}
            {cottages && <CottagesList cottages={cottages.data} />}
        </div>
    );
}

export default AllCottagesSection;
