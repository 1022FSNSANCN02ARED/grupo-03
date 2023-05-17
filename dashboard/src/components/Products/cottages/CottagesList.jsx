import { React } from "react";
import CardCottage from "./CardCottage";

function ActivitiesList({ cottages }) {
    return (
        <div className="p-4 container-lg">
            <div className="d-flex flex-wrap justify-content-evenly">
                {cottages &&
                    cottages.map((cottage, i) => (
                        <div className={"m-2 shadow"} key={cottage.name + i}>
                            <CardCottage cottage={cottage} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ActivitiesList;
