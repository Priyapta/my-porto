import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priyapta HUB",
  description: "Portfolio of Priyapta Naufal Sudrajat",
  icons: {
    icon: "/screen.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full" suppressHydrationWarning>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
