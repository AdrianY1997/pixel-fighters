import React from "react";

export default function UserList({img,user, score}){
    return(
        <>
            <li class="flex items-center">
                <div class="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src={img}/>
                </div>
                <span class="text-gray-600">{user}</span>
                <span class="ml-auto font-semibold">{score}</span>
            </li>
        </>
    )
}