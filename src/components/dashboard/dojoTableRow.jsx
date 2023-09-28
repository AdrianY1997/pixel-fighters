import React from "react";
import UserTable from "./userTable";
import Experience from "./userTable/experience";
import Actions from "./userTable/actions";
import Score from "./score";
import LastOnline from "./userTable/lastOnline";
import Status from "./userTable/status";

export default function DojoTableRow({title, score, userName, date, status}){
    return(
        <tr>
            <UserTable userName={title}/>
            <Score score={score}/>
            <UserTable userName={userName}/>
            <LastOnline date={date}></LastOnline>
            <Status status={status} />
            <Actions></Actions>
            
        </tr>
    )    
}