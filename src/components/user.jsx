import React from 'react';

export default function User() {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-sky-100 rounded-lg border-solid border-2 border-gray-50 p-3 md:p-3 border-2 mb-4 md:mb-0'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mb-4 md:mb-0'>
          <img className="rounded-lg w-full md:w-20 h-20" src="/img/intermedio.jpg" alt="avatar según su experiencia" />
        </div>
        <div className='w-full md:w-1/2 pl-0 md:pl-0'>
          <h1 className='text-blue-500 text-xl font-bold mb-2'>Nombre de usuario</h1>
          <h1 className='text-gray-700 text-lg font-medium'>Experiencia</h1>
          <div className=''>{/* Aquí puedes colocar la calificación */}</div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='text-gray-700 text-lg font-medium'>Temas de interés</h3>
        {/* Agrega aquí los temas de interés si es necesario */}
      </div>
    </div>
  );
}
