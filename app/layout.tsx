import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PixPulse",
  description: "A pictures app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <Separator />
        {children}
      </body>
    </html>
  );
}
