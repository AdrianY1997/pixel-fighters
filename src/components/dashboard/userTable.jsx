import React from "react";

export default function UserTable({userName, email}){
    return(
        <td class="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
            <div class="flex px-2 py-1">
                <div>
                    <img src="../assets/img/team-2.jpg" class="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                </div>
                <div class="flex flex-col justify-center">
                    <h6 class="mb-0 text-sm leading-normal dark:text-white">{userName}</h6>
                    <p class="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{email}</p>
                </div>
            </div>
        </td>
    )
}