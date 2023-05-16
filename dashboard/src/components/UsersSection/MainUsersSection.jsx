import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";
import LastUser from "./LastUserInDB";

function MainUserSection() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setUsers(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container-lg">
            {users && <LastUser lastUser={users.data[users.count - 1]} />}

            {users && <UsersList users={users.data} />}
        </div>
    );
}

export default MainUserSection;
