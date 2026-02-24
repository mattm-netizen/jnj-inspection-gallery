import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "J&J Equipment Rental - Inspection Photos",
  description: "View equipment inspection photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
