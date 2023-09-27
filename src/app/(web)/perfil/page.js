import React from 'react';
import User from '@/components/user';
import Dojo from '@/components/dojo';
import Publicaciones from '@/components/publicaciones';

export default function Profilepage() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4">
        {/* Contenedor de la primera columna (User y Dojo) */}
        <div className="sticky top-0">
          <div className="mb-4">
            <User />
          </div>
          <div className="mb-4">
            <Dojo />
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4 overflow-y-auto">
        {/* Contenedor de la segunda columna (Publicaciones) */}
        <Publicaciones />
      </div>
    </div>
  );
}
