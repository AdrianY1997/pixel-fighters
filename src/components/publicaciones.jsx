import React from "react";

export default function Publicaciones({ list }) {
  return (
    <div className="p-4 w-full">
      <h1 className="text-blue-500 text-xl font-bold mb-4">Tus aportes</h1>
      {myPublications ? (
        myPublications.map((e, i) => {
          return (
            <div className="bg-white px-4 rounded-lg shadow-md">
              <p className="text-xs text-gray-500 pb-0">Fecha del aporte</p>
              <div className="p-2">
                <h2 className="text-xl font-bold text-blue-500 hover:underline cursor-pointer mb-2">
                  Título del aporte
                </h2>
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
