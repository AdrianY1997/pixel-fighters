import Link from "next/link";
import React from "react";

export default function Dojo({ list }) {
  const myDojos = [];

  list.forEach((e) => {
    if (
      !myDojos.find(
        (el) =>
          el.category_name === e.member_dojo_id.dojo_category_id.category_name
      )
    ) {
      myDojos.push({
        category_id: e.member_dojo_id.dojo_category,
        category_name: e.member_dojo_id.dojo_category_id.category_name,
      });
    }
  });
  return (
    <div>
      {/* Título de la sección */}
      <h1 className="text-blue-500 text-xl font-bold m-1 mb-2">Tus dojos</h1>
      <div>
        {/* Comprueba si la lista de dojos no está vacía */}
        {myDojos.length ? (
          myDojos.map((e, i) => (
            // Enlace a los detalles del dojo
            <Link
              href={`/dojos/${e.category_id}`}
              key={i} // Se recomienda agregar una clave única cuando se utiliza map
            >
              {/* Tarjeta de dojo */}
              <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded cursor-pointer m-1">
                {/* Nombre del dojo */}
                <h3>{e.category_name}</h3>
              </div>
            </Link>
          ))
        ) : (
          // Mensaje si no hay dojos en la lista
          <div>
            <p className="bg-blue-500 shadow-md rounded-md p-4 text-white">
              No hay dojos
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
