"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// آیکون خانه (دقیقاً مثل طرح)
const HomeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
  </svg>
);

// آیکون مبادله (Swap) - دقیقاً مثل طرح
const SwapIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 16V4m0 0L3 8m4-4l4 4" />
    <path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

// آیکون دوستان (Friends)
const FriendsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
  </svg>
);

// آیکون کیف پول (Wallet)
const WalletIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
    <path d="M4 6v12a2 2 0 0 0 2 2h14v-4" />
    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
  </svg>
);

export default function BottomNav() {
  const pathname = usePathname();

  // لینک‌ها اصلاح شدند
  const leftItems = [
    { name: "Mine", path: "/", icon: HomeIcon },
    { name: "Swap", path: "/swap", icon: SwapIcon }, 
  ];

  const rightItems = [
    { name: "Friends", path: "/friends", icon: FriendsIcon },
    { name: "Wallet", path: "/wallet", icon: WalletIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-2 pb-2">
      
      {/* کادر اصلی با پس‌زمینه شیشه‌ای و حاشیه طلایی */}
      <div className="relative max-w-md mx-auto bg-black/80 backdrop-blur-md border border-[#E6B333]/40 rounded-[30px] h-[72px] flex items-center justify-between px-6 shadow-[0_-5px_30px_rgba(230,179,51,0.15)]">
        
        {/* آیتم‌های سمت چپ */}
        <div className="flex gap-6">
          {leftItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link key={item.path} href={item.path} className={`flex flex-col items-center justify-center gap-1 transition-colors ${isActive ? "text-[#F5D061] drop-shadow-[0_0_5px_rgba(245,208,97,0.8)]" : "text-gray-400 hover:text-[#F5D061]"}`}>
                <Icon className="w-[26px] h-[26px]" />
                <span className="text-[11px] font-semibold tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* دکمه وسط (منو) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-8">
          <Link href="/menu">
            <div className="w-[75px] h-[75px] rounded-full bg-[#0a0a0a] border-[3px] border-[#E6B333] flex items-center justify-center relative shadow-[0_0_25px_rgba(230,179,51,0.5)]">
              <span className="text-[#F5D061] font-extrabold text-4xl font-serif drop-shadow-md">J</span>
              <div className="absolute -top-4 text-[#F5D061] drop-shadow-[0_0_5px_rgba(245,208,97,1)]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 18h20l-2-8-5 2-3-6-3 6-5-2z" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* آیتم‌های سمت راست */}
        <div className="flex gap-6">
          {rightItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link key={item.path} href={item.path} className={`flex flex-col items-center justify-center gap-1 transition-colors ${isActive ? "text-[#F5D061] drop-shadow-[0_0_5px_rgba(245,208,97,0.8)]" : "text-gray-400 hover:text-[#F5D061]"}`}>
                <Icon className="w-[26px] h-[26px]" />
                <span className="text-[11px] font-semibold tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
