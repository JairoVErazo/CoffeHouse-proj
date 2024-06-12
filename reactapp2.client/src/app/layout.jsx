"use client";
import { Montserrat } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NavBarAdmin from "@/Components/NavBarAdmin";
import useStore from "@/data/store";
import NavBar from "@/components/NavBar";
import "./globals.css";

const monse = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [rol, setRol] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRol(localStorage.getItem("rol"));
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname, router]);

  if (pathname === "/login") {
    return (
      <html lang="en">
        <body className={monse.className}>{children}</body>
      </html>
    );
  }

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
        {rol == 1 ? <NavBarAdmin /> : <NavBar rol={rol} />}

        {children}
      </body>
    </html>
  );
}
