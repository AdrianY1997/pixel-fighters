import React from "react";
import UserTable from "./userTable";
import Experience from "./userTable/experience";
import Role from "./userTable/role";
import Status from "./userTable/status";
import LastOnline from "./userTable/lastOnline";
import Actions from "./userTable/actions";

export default function UserTableRow({userName, email, experience,role,status,date}){
    return(
        <tr>
            <UserTable userName={userName} email={email}/>
            <Experience experience={experience}></Experience>
            <Role role={role}></Role>
            <Status status={status}></Status>
            <LastOnline date={date}></LastOnline>
            <Actions></Actions>
        </tr>
    )
}