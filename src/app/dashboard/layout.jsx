import Header from "@/components/dashboard/header"
import LateralNav from "@/components/dashboard/navlateral";
import TitleSection from "@/components/dashboard/titleSection";
import CardItem from "@/components/dashboard/cardItem";

export default function DashboardLayout() {
  return (
    <>
      <html>
        <body className="flex bg-gray-100 min-h-screen">
            <LateralNav></LateralNav>
            <div className="flex-grow text-gray-800">
              <Header user="Cristian" role="Administrador"></Header>
              <main className="p-6 sm:p-10 space-y-6">
                <TitleSection title="Dashboard"></TitleSection>
                <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                  <CardItem number="100" modulo="Estudiantes"></CardItem>
                  <CardItem number="1000" modulo="Publicaciones"></CardItem>
                  <CardItem number="50" modulo="Dojos"></CardItem>
                  <CardItem number="5689" modulo="Comentarios"></CardItem>
                </section>
              </main>
            </div>  
        </body>
      </html>
    </>
  );
}
