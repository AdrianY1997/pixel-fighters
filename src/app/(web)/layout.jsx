import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function WebLayout({ children }) {
  return (
    <>
    <div>
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col flex-grow min-h-screen">
        <main className="flex-grow bg-[whitesmoke] mt-14 mb-4">{children}</main>
      </div>
    </div>
      <footer className="bg-white w-full shadow dark:bg-gray-900 absolute bottom-0">
        <Footer />
      </footer>
    </>
  );
}
