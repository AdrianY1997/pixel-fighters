import React from "react";
import UserTable from "./userTable";
import Actions from "./userTable/actions";
import LastOnline from "./userTable/lastOnline";
import Experience from "./userTable/experience";

export default function CommentTableRow({
  title,
  userName,
  date,
  description,
  isActionRow,
}) {
  return (
    <tr>
      <UserTable userName={userName} />
      <UserTable userName={title} />
      <LastOnline date={date}></LastOnline>
      <Experience experience={description}></Experience>
      {isActionRow && <Actions></Actions>}
    </tr>
  );
}
