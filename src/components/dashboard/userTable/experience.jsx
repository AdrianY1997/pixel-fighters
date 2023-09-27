import React from "react";

export default function Experience({experience}){
    return(
        <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
            <p class="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{experience}</p>
        </td>
    )
}