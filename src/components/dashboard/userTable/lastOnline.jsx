import React from "react";

export default function LastOnline({ date }) {
  return (
    <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
      <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">
        {date}
      </span>
    </td>
  );
}
