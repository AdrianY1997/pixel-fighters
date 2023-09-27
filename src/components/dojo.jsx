import Link from "next/link";
import React from "react";

export default function Dojo({ list }) {
  return (
    <div>
      {/* Título de la sección */}
      <h1 className="text-blue-500 text-xl font-bold m-1 mb-2">Tus dojos</h1>
      <div>
        {/* Comprueba si la lista de dojos no está vacía */}
        {list ? (
          list.map((e, i) => (
            // Enlace a los detalles del dojo
            <Link
              href={`/dojos/${e.member_dojo_id.dojo_category_id.category_id}`}
              key={i} // Se recomienda agregar una clave única cuando se utiliza map
            >
              {/* Tarjeta de dojo */}
              <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded cursor-pointer m-1">
                {/* Nombre del dojo */}
                <h3>{e.member_dojo_id.dojo_category_id.category_name}</h3>
              </div>
            </Link>
          ))
        ) : (
          // Mensaje si no hay dojos en la lista
          <>No hay dojos</>
        )}
      </div>
    </div>
  );
}
