import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function WebLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-[whitesmoke] p-4 md:py-10 px-0 mx-1">{children}</main>
      </div>
      <footer className="bg-white w-full shadow dark:bg-gray-900 absolute bottom-0">
        <Footer />
      </footer>
    </>
  );
}
