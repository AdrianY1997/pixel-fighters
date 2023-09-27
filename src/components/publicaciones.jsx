import Link from "next/link";
import React from "react";

export default function Publicaciones({ id, list }) {
  const myPublications = list.map((e, i) => {
    if (e.member_id == id) {
      return {
        title: e.member_dojo_id.dojo_name,
        category: e.member_dojo_id.dojo_category_id.category_name,
        id: e.member_dojo_id.dojo_id,
      };
    }
  });

  return (
    <div className="p-4 w-full">
      <h1 className="text-blue-500 text-xl font-bold mb-4">Tus aportes</h1>
      {myPublications ? (
        myPublications.map((e, i) => {
          return (
            <div className="bg-white px-4 rounded-lg shadow-md">
              <p className="text-xs text-gray-500 pb-0">{e.category}</p>
              <div className="p-2">
                <Link
                  href={`/dojos/${e.category.toLowerCase()}/${e.id}`}
                  className="text-xl font-bold text-blue-500 hover:underline cursor-pointer mb-2"
                >
                  {e.title}
                </Link>
                <p className="text-base text-gray-700">Inicio del texto </p>
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
