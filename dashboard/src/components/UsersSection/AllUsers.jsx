import React, { useEffect, useState } from "react";
import UsersList from "./UsersList";
import LastUser from "./LastUserInDB";

function AllUsersSection() {
    const [users, setUsers] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setisLoading(false);
                setUsers(result);
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
        <div className="container-lg">
            {users && <LastUser lastUser={users.data[users.count - 1]} />}
            {users && <UsersList users={users.data} />}
        </div>
    );
}

export default AllUsersSection;
