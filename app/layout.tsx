import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  display: "swap",
  weight: ["400", "500"],
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
    <html lang="th">
      <body className={`${kanit.className} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}


