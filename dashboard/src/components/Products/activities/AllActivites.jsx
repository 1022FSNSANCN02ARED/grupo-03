import React, { useEffect, useState } from "react";
import LastActivity from "./LastActivity";
import ActivitiesList from "./ActivitiesList";

function AllUsersSection() {
    const [activities, setActivities] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/api/activities")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setisLoading(false);
                setActivities(result);
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
            {activities && (
                <LastActivity
                    lastActivity={activities.data[activities.count - 1]}
                />
            )}
            {activities && <ActivitiesList activities={activities.data} />}
        </div>
    );
}

export default AllUsersSection;
