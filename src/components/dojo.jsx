import React from 'react'

export default function Dojo() {
    return (
        <div>
            <h1 className='text-blue-500 text-xl font-bold m-1 mb-2'>Tus dojos</h1>
            <div>
                {/*se mapea los dojos a los que pertenece el ususario*/}
                <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded cursor-pointer m-1">
                    <h3>titulo del dojo</h3>
                </div>
                <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded cursor-pointer m-1">
                    <h3>titulo del dojo</h3>
                </div>
                <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded cursor-pointer m-1">
                    <h3>titulo del dojo</h3>
                </div>
                <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded cursor-pointer m-1">
                    <h3>titulo del dojo</h3>
                </div>
            </div>
        </div>
    )
}
