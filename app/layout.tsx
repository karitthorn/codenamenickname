import type { Metadata } from "next";
import { Kanit} from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kanit",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CodeName_nickname",
  description: "สร้างชื่อเล่นใหม่ของคุณ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.variable} antialiased font-kanit`}>
        {children}
      </body>
    </html>
  );
}
