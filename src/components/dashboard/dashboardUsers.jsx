import ColumnTitleTable from "./columnTitleTable"
import UserTableRow from "./userTableRow"

export default function DashboardUsers(){
    return (
        <>
            <div class="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
                <div class="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
                    <div class="w-full px-6 py-6 mx-auto">
                        <div class="flex flex-wrap -mx-3">
                            <div class="flex-none w-full max-w-full px-3">
                                <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                                    <div class="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                        <h6 class="dark:text-white">Tabla de Usuarios</h6>
                                    </div>
                                    <div class="flex-auto px-0 pt-0 pb-2">
                                        <div class="p-0 overflow-x-auto">
                                            <table class="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                                                <thead class="align-bottom">
                                                    <tr>
                                                        <ColumnTitleTable columnName="User" />
                                                        <ColumnTitleTable columnName="Experience" />
                                                        <ColumnTitleTable columnName="Role" />
                                                        <ColumnTitleTable columnName="Status" />
                                                        <ColumnTitleTable columnName="Last Online" />
                                                        <ColumnTitleTable />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <UserTableRow 
                                                        userName="Cristian" 
                                                        email="cf.giron04@gmail.com" experience="Sensei"
                                                        role="Administrador"
                                                        status="Online"
                                                        date="2023-09-28 8:00"/>
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
    )
}