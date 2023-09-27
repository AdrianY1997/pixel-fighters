import "../../public/css/tailwind.compiled.css";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <body className="flex bg-gray-100 min-h-screen">{children}</body>
      </html>
    </>
  );
}
