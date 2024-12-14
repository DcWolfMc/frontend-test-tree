import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({ weight:['400','700'], subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Checkout Carbon",
  description: "Checkout for compensation of carbon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}