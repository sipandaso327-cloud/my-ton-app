"use client";

import { ArrowDownUp, ChevronDown } from "lucide-react";

export default function Swap() {
  // آدرس قرارداد Jury Token که از لینک DYOR گرفتی
  const tokenAddress = "Ef-_fgHqEczCswLpnBEoIvgyruJUvn_QDt5QRjecY8w3lr2i";

  return (
    <main className="flex flex-col items-center pt-6 px-4 pb-28 min-h-screen text-white bg-[#050505]">
      
      {/* هدر */}
      <div className="w-full max-w-md flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#E6B333]/10 border border-[#E6B333]/30 flex items-center justify-center text-[#E6B333]">
          <ArrowDownUp size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">مبادله (Swap)</h1>
          <p className="text-xs text-gray-400">خرید و فروش سریع JURY با TON</p>
        </div>
      </div>

      {/* کادر نمودار واقعی (DexScreener) */}
      <div className="w-full max-w-md bg-[#111111] border border-[#8A6D1F]/50 rounded-2xl mb-4 overflow-hidden relative" style={{ height: "350px" }}>
        <div className="absolute top-2 left-2 z-10 bg-black/70 px-2 py-1 rounded text-[10px] text-[#E6B333] border border-[#E6B333]/30">
          Jury Token Live Chart
        </div>
        <iframe
          src={`https://dexscreener.com/ton/${tokenAddress}?embed=1&theme=dark&trades=0&info=0`}
          className="w-full h-full border-0"
          allow="clipboard-write"
        ></iframe>
      </div>

      {/* کادر مبادله */}
      <div className="w-full max-w-md bg-[#111111] border border-[#8A6D1F]/50 rounded-2xl p-4 relative">
        
        {/* ورودی TON */}
        <div className="bg-black/60 border border-white/5 rounded-xl p-3 mb-2">
          <p className="text-[10px] text-gray-400 mb-1">شما پرداخت می‌کنید</p>
          <div className="flex justify-between items-center">
            <input type="number" placeholder="0.0" className="bg-transparent text-2xl font-bold text-white outline-none w-full" />
            <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#8A6D1F]/30 px-3 py-1.5 rounded-lg cursor-pointer hover:border-[#E6B333]">
              <span className="text-sm font-bold text-white">TON</span>
              <span className="text-[#E6B333] text-xs">💎</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-1 text-right">موجودی: 0.0 TON</p>
        </div>

        {/* دکمه تبدیل */}
        <div className="flex justify-center -my-3 relative z-10">
          <div className="bg-[#111111] border border-[#8A6D1F] p-2 rounded-full cursor-pointer hover:bg-[#1A1A1A] transition">
            <ArrowDownUp size={20} className="text-[#E6B333]" />
          </div>
        </div>

        {/* خروجی JURY */}
        <div className="bg-black/60 border border-white/5 rounded-xl p-3 mt-2">
          <p className="text-[10px] text-gray-400 mb-1">شما دریافت می‌کنید</p>
          <div className="flex justify-between items-center">
            <input type="text" placeholder="0.0" className="bg-transparent text-2xl font-bold text-white outline-none w-full" readOnly />
            <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#8A6D1F]/30 px-3 py-1.5 rounded-lg cursor-pointer hover:border-[#E6B333]">
              <span className="text-sm font-bold text-white">JURY</span>
              <span className="text-[#E6B333] text-xs">👑</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-1 text-right">موجودی: 12,587.42 JURY</p>
        </div>

        {/* اطلاعات تراکنش */}
        <div className="mt-4 space-y-2 text-xs bg-black/30 p-3 rounded-xl border border-white/5">
          <div className="flex justify-between text-gray-400">
            <span>نرخ تبدیل</span>
            <span className="text-white">1 TON ≈ 4,567 JURY</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>کارمزد شبکه</span>
            <span className="text-white">0.05 TON</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#B8860B] via-[#F5D061] to-[#B8860B] text-black font-extrabold text-lg py-3 rounded-xl mt-4 border border-[#FFF8DC]/50 active:scale-95 transition">
          تایید مبادله
        </button>
      </div>

    </main>
  );
}
