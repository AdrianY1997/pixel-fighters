import Link from "next/link";
import React from "react";

export default function Dojo({ list }) {
  return (
    <div>
      <h1 className="text-blue-500 text-xl font-bold m-1 mb-2">Tus dojos</h1>
      <div>
        {list ? (
          list.map((e, i) => (
            <Link
              href={`/dojos/${e.member_dojo_id.dojo_category_id.category_name.toLowerCase()}`}
            >
              <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded cursor-pointer m-1">
                <h3>{e.member_dojo_id.dojo_category_id.category_name}</h3>
              </div>
            </Link>
          ))
        ) : (
          <>No hay dojos</>
        )}
      </div>
    </div>
  );
}
