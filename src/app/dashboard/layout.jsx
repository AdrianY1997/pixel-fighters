import Header from "@/components/dashboard/header"
import LateralNav from "@/components/dashboard/navlateral";

import Footer from "@/components/footer";


export default function DashboardLayout({children}) {
  return (
    <>
      <html>
        <body className="flex bg-gray-100 min-h-screen">
            <LateralNav></LateralNav>
            <div className="flex-grow text-gray-800">
              <Header user="Cristian" role="Administrador"></Header>
              <main className="p-6 sm:p-10 space-y-6">
                {children}
                <section class="text-right font-semibold text-gray-500">
                  <Footer></Footer>
                </section>
              </main>
            </div>  
        </body>
      </html>
    </>
  );
}
