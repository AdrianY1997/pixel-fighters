import InputGroup from "@/components/form/inputGroup";
import { prisma } from "@/services/database/client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

export default async function CategoryPage({ params }) {
  const categoryData = await prisma.category.findFirst({
    where: {
      category_name: params.category.toLowerCase(),
    },
    include: {
      Dojo: true,
    },
  });

  return (
    <>
      <div className="p-2 w-full">
        <div>
          <div className="flex gap-4">
            <div className="bg-black w-20 h-20"></div>
            <div>
              <h1 className="font-bold text-xl">
                {categoryData.category_name[0].toUpperCase() +
                  categoryData.category_name.slice(1)}
              </h1>
              <p className="text-sm text-gray-600">
                {categoryData.Dojo.length} Publicación(es)
              </p>
              <p>{categoryData.category_description}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 my-4 rounded-md shadow-md flex gap-4">
          <div className="w-full">
            <InputGroup placeholder="Buscar..." name={"cat-search"} />
          </div>
          <div className="bg-blue-500 px-4 flex items-center text-white rounded-md">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className="flex">
          {categoryData ? (
            <>
              {categoryData.Dojo.map((e, i) => {
                console.log(e);
                return (
                  <Fragment key={i}>
                    <div className="relative bg-white p-4 rounded-md shadow-md">
                      <div className="w-20"></div>
                      <div className="absolute top-0 left-4 -my-5 bg-black w-20 h-20"></div>
                    </div>
                  </Fragment>
                );
              })}
            </>
          ) : (
            <>No hay Dojos</>
          )}
        </div>
      </div>
    </>
  );
}
