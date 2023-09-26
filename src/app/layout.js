import "../../public/css/tailwind.compiled.css";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body className="bg-[whitesmoke]">
          <header>Header</header>
          <main>{children}</main>
          <footer>Footer</footer>
        </body>
      </html>
    </>
  );
}
