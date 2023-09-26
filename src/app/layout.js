import "../../public/css/tailwind.compiled.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body className="bg-[whitesmoke]">
          <header>
            <Navbar />
          </header>
          <main className="bg-[whitesmoke]">{children}</main>
          <footer className="bg-white w-full shadow dark:bg-gray-900">
            <Footer />
          </footer>
        </body>
      </html>
    </>
  );
}
