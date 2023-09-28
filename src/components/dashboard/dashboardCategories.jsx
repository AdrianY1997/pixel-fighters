import { prisma } from "@/services/database/client";
import CategoryTableRow from "./categoryTableRow";
import ColumnTitleTable from "./columnTitleTable";

export default async function DashboardCategories() {
  const categories = await prisma.category.findMany();
  return (
    <>
      <div className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
        <div className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
          <div className="w-full px-6 py-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6 className="dark:text-white">Tabla de Categorias</h6>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                        <thead className="align-bottom">
                          <tr>
                            <ColumnTitleTable columnName="Category" />
                            <ColumnTitleTable columnName="Description" />
                            <ColumnTitleTable />
                          </tr>
                        </thead>
                        <tbody>
                          {categories.length ? (
                            categories.map((e) => {
                              return (
                                <>
                                  <CategoryTableRow
                                    name={
                                      e.category_name[0].toUpperCase() +
                                      e.category_name.slice(1)
                                    }
                                    description={e.category_description}
                                  />
                                </>
                              );
                            })
                          ) : (
                            <>
                              <CategoryTableRow
                                name={"No hay categorías"}
                                isActionRow={false}
                              />
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
