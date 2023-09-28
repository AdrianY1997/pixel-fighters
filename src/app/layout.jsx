"use client";

import "../../public/css/tailwind.compiled.css";

import { SessionProvider } from "next-auth/react";
import { ToastProvider } from "@/components/providers/toastProvider";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <SessionProvider>
          <body className="bg-gray-100 min-h-[100vh] relative flex flex-col justify-between">
            {children}
            <ToastProvider />
          </body>
        </SessionProvider>
      </html>
    </>
  );
}
