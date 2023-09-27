import React from "react";
 
export default function CardItem({modulo, svg, number,text}){
    return(
        
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
            <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                {svg}
            </div>
            <div>
                <span class="block text-2xl font-bold">{number}</span>
                <span class="block text-gray-500">{modulo}</span>
            </div>
        </div>
        
    )    
}