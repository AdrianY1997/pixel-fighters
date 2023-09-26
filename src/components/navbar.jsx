import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
			<nav className=" shadow-sm bg-white fixed w-full">
				<div className="w-full">
					<div className="flex items-center h-15 w-full">
						<div className="flex items-center  mx-5 justify-between w-full ">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className="font-bold text-xl cursor-pointer">
									Pixel project
								</h1>
							</div>
							<div className="hidden md:block">
								<div className=" flex items-baseline justify-end space-x-4">
									<Link
										href="/registro"
										className="cursor-pointer text-black hover:text-blue-600 px-4 py-2 rounded-md"
									>
										Registro
									</Link>
									<Link
										href="/acceder"
										className="cursor-pointer bg-blue-500 text-white px-4 py-1 rounded-md"
									>
										Acceder
									</Link>
								</div>
							</div>
                        </div>
					</div>
				</div>
			</nav>
		</div>
    )
}
