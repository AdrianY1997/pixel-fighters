import { prisma } from "@/services/database/client";
import ColumnTitleTable from "./columnTitleTable";
import DojoTableRow from "./dojoTableRow";
import { randomInt } from "crypto";

export default async function DashboardDojos() {
  const dojosList =
    await prisma.$queryRaw`SELECT dojo.dojo_name, publication.publication_calification, user.user_name, publication.publication_datecreated, publication.publication_event FROM dojo, publication, user, dojomember WHERE dojomember.member_user = user.user_id AND dojomember.member_dojo = dojo.dojo_id AND publication.publication_dojo = dojomember.member_dojo`;

  return (
    <>
      <div className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
        <div className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
          <div className="w-full px-6 py-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6 className="dark:text-white">
                      Tabla de Dojos Publicaciones
                    </h6>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                        <thead className="align-bottom">
                          <tr>
                            <ColumnTitleTable columnName="Titulo" />
                            <ColumnTitleTable columnName="Puntuación" />
                            <ColumnTitleTable columnName="Autor" />
                            <ColumnTitleTable columnName="Fecha de creación" />
                            <ColumnTitleTable columnName="Evento" />
                            <ColumnTitleTable />
                          </tr>
                        </thead>
                        <tbody>
                          {dojosList.length ? (
                            dojosList.map((e) => {
                              return (
                                <>
                                  <DojoTableRow
                                    title={e.dojo_name}
                                    score={e.publication_calification}
                                    userName={e.user_name}
                                    date={new Date(
                                      e.publication_datecreated
                                    ).toLocaleDateString()}
                                    status={
                                      e.publication_event == 1 ? "SI" : "NO"
                                    }
                                  />
                                </>
                              );
                            })
                          ) : (
                            <>
                              <DojoTableRow
                                isActionRow={false}
                                title={"No hay Dojos publicados"}
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
