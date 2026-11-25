"use client";

import { useEffect, useState } from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Bell, Wallet, Zap, Rocket, Users, ArrowLeftRight, Gift, TrendingUp, ShieldCheck, Pickaxe } from "lucide-react";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState("00:59:42");

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      if (tg.initDataUnsafe?.user) {
        setUser(tg.initDataUnsafe.user);
      }
    }
  }, []);

  return (
    <main className="flex flex-col items-center pt-4 px-3 pb-32 min-h-screen bg-[#050505] text-white">
      
      {/* ۱. هدر بالا */}
      <div className="w-full max-w-md flex justify-between items-center mb-4 z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-[#E6B333] bg-black flex items-center justify-center relative shadow-[0_0_15px_rgba(230,179,51,0.3)]">
            <span className="text-[#F5D061] font-extrabold text-2xl font-serif">J</span>
            <div className="absolute -top-2 -right-1 text-[#F5D061] text-sm">👑</div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <p className="text-base font-extrabold text-white">Jury Token</p>
              <ShieldCheck size={16} className="text-[#E6B333]" />
            </div>
            <p className="text-[10px] text-[#E6B333] tracking-widest font-medium">Mine • Earn • Grow</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell size={24} className="text-[#E6B333]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-black"></span>
          </div>
          <div className="scale-75 origin-right">
            <TonConnectButton />
          </div>
        </div>
      </div>

      {/* ۲. کارت‌های موجودی و نرخ */}
      <div className="w-full max-w-md flex gap-2 mb-4 z-10">
        <div className="flex-1 bg-[#111111] border border-[#8A6D1F] rounded-2xl p-3 flex items-center justify-between shadow-[0_0_10px_rgba(230,179,51,0.05)]">
          <div>
            <p className="text-[10px] text-gray-400 mb-1 flex items-center gap-1"><Wallet size={12} className="text-[#E6B333]"/> Your Balance</p>
            <p className="text-sm font-extrabold text-white">12,587.42 <span className="text-[10px] text-[#E6B333]">JURY</span></p>
          </div>
          <span className="text-gray-500 text-xs">{'>'}</span>
        </div>
        <div className="flex-1 bg-[#111111] border border-[#8A6D1F] rounded-2xl p-3 flex items-center justify-between shadow-[0_0_10px_rgba(230,179,51,0.05)]">
          <div>
            <p className="text-[10px] text-gray-400 mb-1 flex items-center gap-1"><Zap size={12} className="text-[#E6B333]"/> Mining Rate</p>
            <p className="text-sm font-extrabold text-white">+28.75 <span className="text-[10px] text-[#E6B333]">/h</span></p>
          </div>
          <p className="text-[10px] text-green-500 font-bold">↑ +12%</p>
        </div>
      </div>

      {/* ۳. بخش ماینینگ (بزرگ و اصلی) */}
      <div className="w-full max-w-md bg-gradient-to-b from-[#1a1500] to-[#0a0a0a] border border-[#E6B333]/50 rounded-3xl p-5 mb-4 relative overflow-hidden shadow-[0_0_25px_rgba(230,179,51,0.15)] z-10">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E6B333]/10 flex items-center justify-center border border-[#E6B333]/40">
              <Pickaxe className="text-[#E6B333]" size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></span> Mining...
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">Next Reward In</p>
              <p className="text-xl font-bold text-[#F5D061] font-mono tracking-wider">{timeLeft}</p>
            </div>
          </div>
          <div className="text-right">
             <p className="text-xl font-extrabold text-white">+28.75</p>
             <p className="text-[10px] text-[#E6B333] font-bold">JURY / Hour</p>
          </div>
        </div>

        {/* دکمه بزرگ ماین (گرادیانت طلایی) */}
        <button className="w-full bg-gradient-to-r from-[#B8860B] via-[#F5D061] to-[#B8860B] text-black font-extrabold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(245,208,97,0.4)] flex items-center justify-center gap-3 active:scale-95 transition border border-[#FFF8DC]/50">
          <Pickaxe size={24} /> MINE JURY <span className="text-xl">{'>>'}</span>
        </button>
      </div>

      {/* ۴. کارت ارتقا (Boost) */}
      <div className="w-full max-w-md bg-[#111111] border border-white/10 rounded-2xl p-4 mb-4 z-10">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <Rocket className="text-[#E6B333]" size={28} />
            <div>
              <p className="text-sm font-bold text-white">Boost Your Mining</p>
              <p className="text-[10px] text-gray-400">Upgrade your level to earn more!</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#B8860B] to-[#F5D061] text-black text-xs font-bold px-4 py-2 rounded-lg shadow-[0_0_10px_rgba(245,208,97,0.3)] border border-[#FFF8DC]/30">Upgrade {'>'}</button>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] text-gray-400">Lv.4</span>
          <div className="flex-1 h-2.5 bg-black rounded-full overflow-hidden border border-white/5">
            <div className="h-full bg-gradient-to-r from-[#B8860B] to-[#F5D061] w-[67%] rounded-full shadow-[0_0_10px_rgba(245,208,97,0.5)]"></div>
          </div>
          <span className="text-[10px] text-gray-400">67%</span>
        </div>
      </div>

      {/* ۵. چهار دکمه میانبر */}
      <div className="w-full max-w-md grid grid-cols-4 gap-2 mb-4 z-10">
        <div className="bg-[#111111] border border-[#8A6D1F]/50 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-[0_0_10px_rgba(230,179,51,0.05)]">
          <Users size={22} className="text-[#E6B333] mb-1" />
          <p className="text-[10px] text-white font-bold mb-0.5">Referral</p>
          <p className="text-[8px] text-green-500 font-medium">+25% Bonus</p>
        </div>
        <div className="bg-[#111111] border border-[#8A6D1F]/50 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-[0_0_10px_rgba(230,179,51,0.05)]">
          <ArrowLeftRight size={22} className="text-[#E6B333] mb-1" />
          <p className="text-[10px] text-white font-bold mb-0.5">Swap</p>
          <p className="text-[8px] text-gray-400 font-medium">Trade JURY</p>
        </div>
        <div className="bg-[#111111] border border-[#8A6D1F]/50 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-[0_0_10px_rgba(230,179,51,0.05)]">
          <Wallet size={22} className="text-[#E6B333] mb-1" />
          <p className="text-[10px] text-white font-bold mb-0.5">Wallet</p>
          <p className="text-[8px] text-gray-400 font-medium">Your Assets</p>
        </div>
        <div className="bg-[#111111] border border-[#8A6D1F]/50 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-[0_0_10px_rgba(230,179,51,0.05)]">
          <Gift size={22} className="text-[#E6B333] mb-1" />
          <p className="text-[10px] text-white font-bold mb-0.5">Rewards</p>
          <p className="text-[8px] text-green-500 font-medium">Daily Bonus</p>
        </div>
      </div>

      {/* ۶. کارت‌های پایین (Referral & Market) */}
      <div className="w-full max-w-md flex gap-2 z-10">
        <div className="flex-1 bg-[#111111] border border-white/10 rounded-2xl p-3">
          <p className="text-[11px] font-bold text-white mb-1 flex items-center gap-1"><Users size={14} className="text-[#E6B333]"/> Referral Program</p>
          <p className="text-[9px] text-gray-400 mb-2">Invite friends and earn <span className="text-green-500 font-bold">+25%</span> from their mining!</p>
          <button className="w-full bg-gradient-to-r from-[#B8860B] to-[#F5D061] text-black text-[10px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1">✈️ Invite Now</button>
        </div>
        <div className="flex-1 bg-[#111111] border border-white/10 rounded-2xl p-3">
          <p className="text-[11px] font-bold text-white mb-1 flex items-center gap-1"><TrendingUp size={14} className="text-[#E6B333]"/> Market Info</p>
          <p className="text-[10px] text-gray-400">JURY Price</p>
          <p className="text-sm font-extrabold text-white mb-0.5">$0.2847</p>
          <p className="text-[9px] text-green-500 font-bold mb-2">↑ +7.32%</p>
          <div className="flex justify-between text-[8px] text-gray-400">
             <span>Market Cap<br/><span className="text-white">$284.7M</span></span>
             <span>Liquidity<br/><span className="text-white">$2.1M</span></span>
          </div>
        </div>
      </div>

    </main>
  );
}
