import Header from "@/components/dashboard/header"
import LateralNav from "@/components/dashboard/navlateral";

export default function DashboardLayout() {
  return (
    <>
      <html>
        <body className="flex bg-gray-100 min-h-screen">
            <LateralNav></LateralNav>
            <Header user="Cristian" role="Administrador"></Header>  
        </body>
      </html>
    </>
  );
}
