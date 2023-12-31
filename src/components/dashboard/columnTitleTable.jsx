import React from "react";

export default function ColumnTitleTable({ columnName }) {
  return (
    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
      {columnName}
    </th>
  );
}
