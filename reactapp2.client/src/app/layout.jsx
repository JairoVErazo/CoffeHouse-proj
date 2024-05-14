import { Montserrat } from "next/font/google";
import NavBar from "@/Components/NavBar";
import "./globals.css";
import NavBarAdmin from "@/Components/NavBarAdmin";

const monse = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Coffe House - Home",
  description: "Coffe House, Coffe, Café, Cafeteria, Coffe shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={monse.className}
        style={{
          backgroundImage: 'url("img/fondo.png")',
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
