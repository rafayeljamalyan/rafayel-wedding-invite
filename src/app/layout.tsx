import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ռաֆայել և Լյուդմիլա - Հարսանիք",
  description: "Wedding invitation for Rafayel and Lyudmila",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
