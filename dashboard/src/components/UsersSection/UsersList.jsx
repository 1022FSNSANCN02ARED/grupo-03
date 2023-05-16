import { React } from "react";
import CardUser from "./CardUser";

function UsersList({ users }) {
    return (
        <div className="p-4 container-lg">
            <div className="d-flex flex-wrap justify-content-evenly">
                {users &&
                    users.map((user, i) => (
                        <div className="m-2" key={user.first_name + i}>
                            <CardUser user={user} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default UsersList;
