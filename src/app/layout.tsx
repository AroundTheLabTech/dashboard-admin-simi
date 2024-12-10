

import "../styles/globals.css";
export const metadata = {
  title: "Simi Admin",
  description: "Dashboard de administrador para Simi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
