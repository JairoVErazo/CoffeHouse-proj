"use client";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import NavBar from "@/Components/NavBar";
import "./globals.css";
import NavBarAdmin from "@/Components/NavBarAdmin";

const monse = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Si la ruta es '/login', no aplicamos el layout
  if (pathname === "/login") {
    return (
      <html lang="en">
        <body className={monse.className}>{children}</body>
      </html>
    );
  }

  // Aquí va tu layout global
  return (
    <html lang="en">
      <body
        className={monse.className}
        style={{
          backgroundImage: 'url("/img/fondo.png")',
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <NavBarAdmin />
        {children}
      </body>
    </html>
  );
}
