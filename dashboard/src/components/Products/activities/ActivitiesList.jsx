import { React } from "react";
import CardActivity from "./CardActivity";

function ActivitiesList({ activities }) {
    return (
        <div className="p-4 container-lg">
            <div className="d-flex flex-wrap justify-content-evenly">
                {activities &&
                    activities.map((activity, i) => (
                        <div
                            className={"m-2 shadow"}
                            key={activity.first_name + i}
                        >
                            <CardActivity activity={activity} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ActivitiesList;
