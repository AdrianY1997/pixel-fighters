import React from "react";
import UserTable from "./userTable";
import Experience from "./userTable/experience";
import Actions from "./userTable/actions";

export default function CategoryTableRow({
  name,
  description,
  isActionRow = true,
}) {
  return (
    <tr>
      <UserTable userName={name} />
      <Experience experience={description}></Experience>
      {isActionRow && <Actions></Actions>}
    </tr>
  );
}
