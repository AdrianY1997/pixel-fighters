import { prisma } from "@/services/database/client";
import Link from "next/link";

export default async function DojosPage() {
    const Dojoslist = await prisma.category.findMany();
    return (
        <div className="bg-white flex flex-col mx-20 p-5 h-full">
            <h1 className="text-blue-500 text-2xl font-bold mb-4">Dojos existentes</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8">
                {Dojoslist &&
                    Dojoslist.map((e) => (
                        <div key={e.category_id} className="bg-gradient-to-r from-white-400 to-gray-200 rounded-lg p-4 border-solid border-2 border-gray-50 shadow-md">
                            <div className="flex flex-row">
                                <div className="bg-black w-20 h-20 rounded-md m-2"></div>
                                <h1 className="text-lg font-bold mb-2">{e.category_name}</h1>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-col flex-grow">
                                    <p className="text-gray-600 flex-grow h-40">{e.category_description}</p>
                                    <div className="flex justify-end mt-auto">
                                        <button className="text-white bg-blue-500 rounded-md py-1 px-2">
                                            <Link href={`dojos/${e.category_id}`}>Detalles</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}