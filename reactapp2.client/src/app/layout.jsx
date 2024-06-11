"use client";
import { Montserrat } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import NavBarAdmin from "@/Components/NavBarAdmin";
import "./globals.css";

const monse = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname, router]);

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
