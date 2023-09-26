import "../../public/css/tailwind.compiled.css";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body className="bg-[whitesmoke]">{children}</body>
      </html>
    </>
  );
}
