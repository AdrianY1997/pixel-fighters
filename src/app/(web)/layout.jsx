import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function WebLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-[whitesmoke]">{children}</main>
      <footer className="bg-white w-full shadow dark:bg-gray-900">
        <Footer />
      </footer>
    </>
  );
}
