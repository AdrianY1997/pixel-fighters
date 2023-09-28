import React from "react";

export default function UserList({ img, user, score }) {
  return (
    <>
      <li className="flex items-center">
        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
          <img src={img} />
        </div>
        <span className="text-gray-600">{user}</span>
        <span className="ml-auto font-semibold">{score}</span>
      </li>
    </>
  );
}
