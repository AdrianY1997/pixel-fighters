import InputGroup from "@/components/form/inputGroup";
import { prisma } from "@/services/database/client";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "autoprefixer";
import { randomInt } from "crypto";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Fragment } from "react";

export default async function CategoryPage({ params }) {
  const session = await getServerSession();
  const categoryData = await prisma.category.findFirst({
    where: {
      category_id: params.category,
    },
    include: {
      Dojo: {
        include: {
          DojoMember: {
            include: {
              member_user_id: true,
            },
          },
        },
      },
    },
  });

  return (
    <>
      <div className="p-2 w-full">
        <div>
          <div className="flex gap-4 relative -z-0">
            <div className="bg-black w-20 h-20"></div>
            <div className="relative w-full">
              <h1 className="font-bold text-xl">
                {categoryData.category_name[0].toUpperCase() +
                  categoryData.category_name.slice(1)}
              </h1>
              <p className="text-sm text-gray-600">
                {categoryData.Dojo.length} Publicación(es)
              </p>
              <p>{categoryData.category_description}</p>
            </div>
            {session && (
              <div className="absolute right-0 bottom-0">
                <Link
                  className="bg-blue-500 px-4 py-2 text-white rounded-md shadow-md"
                  href={`/dojos/${categoryData.category_id}/nuevo`}
                >
                  Agregar
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white p-4 my-4 rounded-md shadow-md flex gap-4">
          <div className="w-full">
            <InputGroup placeholder="Buscar..." name={"cat-search"} />
          </div>
          <div className="bg-blue-500 text-base px-4 flex items-center text-white rounded-md">
            <FontAwesomeIcon width={15} icon={faSearch} />
          </div>
        </div>
        <div className="flex mt-8 w-full">
          {categoryData ? (
            <>
              <div className="flex flex-wrap gap-4 gap-y-8 w-[49%]">
                {categoryData.Dojo.map((e, i) => {
                  const dojoData = e.DojoMember.map((e, i) => {
                    return {
                      name: e.member_user_id.user_name,
                      stars: randomInt(5),
                    };
                  });
                  return (
                    <>
                      <div className=" bg-white  rounded-md shadow-md w-full">
                        <div className="relative flex gap-4 px-4">
                          <div className="absolute top-0 left-4 -my-5 bg-black w-20 h-20"></div>
                          <div className="w-20"></div>
                          <div>
                            <p className="font-bold text-lg">
                              {dojoData[0].name[0].toUpperCase() +
                                dojoData[0].name.slice(1)}
                            </p>
                            <p className="flex gap-2">
                              <FontAwesomeIcon
                                width={15}
                                className="text-yellow-600"
                                icon={faStar}
                              />
                              <span>{dojoData[0].stars}</span>
                            </p>
                          </div>
                        </div>
                        <div className="px-4 mt-2 pb-2">
                          <Link
                            href={`/dojos/${categoryData.category_id}/${e.dojo_id}`}
                            className="font-bold text-blue-500 text-2xl underline"
                          >
                            {e.dojo_name[0].toUpperCase() +
                              e.dojo_name.slice(1)}
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <>No hay Dojos</>
          )}
        </div>
      </div>
    </>
  );
}
