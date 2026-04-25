import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nufferton Demo",
  description: "A minimal Next.js starter — frontend for a Crystallize-style commerce stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
