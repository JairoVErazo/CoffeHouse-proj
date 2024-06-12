"use client";

export default function LoginLayout({ children }) {
  return (
    <body
      style={{
        backgroundImage: 'url("/img/fondo.png")',
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      {children}
    </body>
  );
}
