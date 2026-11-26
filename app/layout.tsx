import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TonProvider from "./TonProvider";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jury Token",
  description: "Mine • Earn • Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <TonProvider>
          <div 
            className="min-h-screen w-full relative flex flex-col"
            style={{
              backgroundImage: "url('/bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}
          >
            {/* لایه مشکی برای خوانایی متن‌ها (کمی شفاف‌تر تا عکس بهتر دیده بشه) */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            
            <div className="relative z-10 flex-1 pb-28">
              {children}
            </div>
            
            <BottomNav />
          </div>
        </TonProvider>
      </body>
    </html>
  );
}
