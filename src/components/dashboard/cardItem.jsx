import React from "react";
 
export default function CardItem({modulo, svg, number}){
    return(
        
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                {svg}
            </div>
            <div>
                <span className="block text-2xl font-bold">{number}</span>
                <span className="block text-gray-500">{modulo}</span>
            </div>
        </div>
        
    )    
}