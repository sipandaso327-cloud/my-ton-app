"use client";

import { useState, useEffect } from "react";
import { ArrowDownUp, Settings, TrendingUp, TrendingDown, ExternalLink, ShieldCheck } from "lucide-react";
import Image from "next/image"; // برای نمایش بهینه لوگو

export default function Swap() {
  const [tonAmount, setTonAmount] = useState("1");
  
  const [priceUsd, setPriceUsd] = useState<string>("0");
  const [priceTon, setPriceTon] = useState<string>("0");
  const [change24h, setChange24h] = useState<number>(0);
  const [volume24h, setVolume24h] = useState<string>("...");
  const [liquidity, setLiquidity] = useState<string>("...");
  const [isLoading, setIsLoading] = useState(true);

  const tokenAddress = "Ef-_fgHqEczCswLpnBEoIvgyruJUvn_QDt5QRjecY8w3lr2i";
  const networkFee = 0.05;
  
  const priceTonNum = parseFloat(priceTon) || 0.000219;
  const rate = priceTonNum > 0 ? (1 / priceTonNum) : 4567;
  const juryAmount = tonAmount ? (parseFloat(tonAmount) * rate).toFixed(2) : "0";
  const totalTon = tonAmount ? (parseFloat(tonAmount) + networkFee).toFixed(2) : "0.00";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`);
        const data = await res.json();
        
        if (data.pairs && data.pairs.length > 0) {
          const pair = data.pairs.find((p: any) => p.quoteToken.symbol === "TON") || data.pairs[0];
          setPriceUsd(pair.priceUsd || "0");
          setPriceTon(pair.priceNative || "0");
          setChange24h(pair.priceChange?.h24 || 0);
          setVolume24h(pair.volume?.h24 ? (pair.volume.h24).toLocaleString() : "0");
          setLiquidity(pair.liquidity?.usd ? (pair.liquidity.usd).toLocaleString() : "0");
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching price:", err);
        setIsLoading(false);
      }
    };
    
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  const isPositive = change24h >= 0;

  return (
    <main className="flex flex-col items-center pt-6 px-4 pb-28 min-h-screen text-white bg-[#050505]">
      
      {/* هدر با لوگو */}
      <div className="w-full max-w-md flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-black border-2 border-[#E6B333] flex items-center justify-center relative shadow-[0_0_15px_rgba(230,179,51,0.3)]">
            <span className="text-[#E6B333] font-extrabold text-2xl font-serif">J</span>
            <div className="absolute -top-2 -right-2 text-[#E6B333] text-sm">👑</div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              Jury Swap <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded border border-green-500/30">DEX 2.1</span>
            </h1>
            <p className="text-[11px] text-[#E6B333]">تبادل امن و مستقیم</p>
          </div>
        </div>
        <div className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#E6B333] transition cursor-pointer">
          <Settings size={18} />
        </div>
      </div>

      {/* کارت قیمت و نمودار */}
      <div className="w-full max-w-md bg-gradient-to-b from-[#1a1500] to-[#0a0a0a] border border-[#E6B333]/40 rounded-3xl p-5 mb-4 shadow-[0_0_30px_rgba(230,179,51,0.1)]">
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E6B333]/10 border border-[#E6B333]/30 flex items-center justify-center">
              <span className="text-[#E6B333] text-lg">👑</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">JURY / TON</p>
              <p className="text-xs text-gray-400">Jury Token</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-extrabold text-white">
              {isLoading ? "..." : priceTon} <span className="text-xs text-gray-500">TON</span>
            </p>
            <div className={`flex items-center justify-end gap-1 text-xs font-bold mt-1 ${isPositive ? "text-green-500" : "text-red-500"}`}>
              {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />} 
              {isLoading ? "..." : `${change24h.toFixed(2)}%`}
            </div>
          </div>
        </div>

        {/* نمودار واقعی */}
        <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-[#E6B333]/20 relative bg-black/50 mb-4">
           <iframe
             src={`https://dexscreener.com/ton/${tokenAddress}?embed=1&theme=dark&trades=0&info=0`}
             className="w-full h-full border-0"
             allow="clipboard-write"
           ></iframe>
        </div>

        <div className="flex justify-between items-center text-[11px] text-gray-400 border-t border-white/5 pt-3">
          <div className="flex flex-col">
            <span>حجم ۲۴ ساعته</span>
            <span className="text-white font-bold">${volume24h}</span>
          </div>
          <div className="flex flex-col text-right">
            <span>نقدینگی</span>
            <span className="text-white font-bold">${liquidity}</span>
          </div>
        </div>
      </div>

      {/* کادر مبادله */}
      <div className="w-full max-w-md bg-[#111111] border border-[#8A6D1F]/50 rounded-3xl p-5 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        
        {/* ورودی TON */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2 px-1">
            <p className="text-xs text-gray-400">شما پرداخت می‌کنید</p>
            <p className="text-[10px] text-[#E6B333]">موجودی: 0.0 TON</p>
          </div>
          <div className="bg-black/60 border border-[#8A6D1F]/30 rounded-2xl p-4 focus-within:border-[#E6B333] focus-within:shadow-[0_0_10px_rgba(230,179,51,0.1)] transition-all">
            <div className="flex justify-between items-center">
              <input 
                type="number" 
                value={tonAmount}
                onChange={(e) => setTonAmount(e.target.value)}
                className="bg-transparent text-3xl font-extrabold text-white outline-none w-full" 
              />
              <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#8A6D1F]/30 px-3 py-2 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px]">💎</div>
                <span className="text-sm font-bold text-white">TON</span>
              </div>
            </div>
          </div>
          
          {/* دکمه‌های میانبر */}
          <div className="grid grid-cols-5 gap-2 mt-2">
            {["0.1", "0.5", "1", "5", "10"].map((val) => (
              <button 
                key={val}
                onClick={() => setTonAmount(val)}
                className={`py-2 rounded-xl text-xs font-bold border transition ${
                  tonAmount === val 
                    ? "bg-[#E6B333]/20 border-[#E6B333] text-[#E6B333] shadow-[0_0_10px_rgba(230,179,51,0.2)]" 
                    : "bg-[#1A1A1A] border-white/5 text-gray-400 hover:border-[#E6B333]/50"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* دکمه تبدیل */}
        <div className="flex justify-center -my-3 relative z-10">
          <div className="bg-[#111111] border-2 border-[#8A6D1F] p-2.5 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.8)]">
            <ArrowDownUp size={20} className="text-[#E6B333]" />
          </div>
        </div>

        {/* خروجی JURY */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2 px-1">
            <p className="text-xs text-gray-400">شما دریافت می‌کنید</p>
            <p className="text-[10px] text-green-500 flex items-center gap-1"><ShieldCheck size={12}/> تضمین STON.fi</p>
          </div>
          <div className="bg-black/60 border border-[#8A6D1F]/30 rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <p className="text-3xl font-extrabold text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">+{juryAmount}</p>
              <div className="flex items-center gap-2 bg-[#E6B333]/10 border border-[#E6B333]/30 px-3 py-2 rounded-xl">
                <span className="text-sm font-bold text-[#E6B333]">JURY</span>
                <div className="w-6 h-6 rounded-full bg-[#E6B333]/20 flex items-center justify-center text-[12px] text-[#E6B333]">👑</div>
              </div>
            </div>
          </div>
        </div>

        {/* اطلاعات تراکنش */}
        <div className="mt-5 space-y-3 text-xs bg-black/40 p-4 rounded-2xl border border-white/5">
          <div className="flex justify-between text-gray-400">
            <span>نرخ تبدیل لحظه‌ای</span>
            <span className="text-white font-bold">1 TON ≈ {isLoading ? "..." : rate.toFixed(2)} JURY</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>قیمت JURY</span>
            <span className="text-white font-bold">${isLoading ? "..." : priceUsd}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>کارمزد شبکه</span>
            <span className="text-[#E6B333]">0.05 TON</span>
          </div>
          <div className="flex justify-between text-white font-bold border-t border-white/10 pt-3 mt-3">
            <span>کل مبلغ پرداختی</span>
            <span className="text-[#E6B333] text-base">{totalTon} TON</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#B8860B] via-[#F5D061] to-[#B8860B] text-black font-extrabold text-base py-4 rounded-2xl mt-5 border border-[#FFF8DC]/50 active:scale-95 transition-all shadow-[0_0_20px_rgba(230,179,51,0.3)] flex items-center justify-center gap-2">
          <ArrowDownUp size={20} /> سواپ TON → JURY
        </button>
        
        <p className="text-center text-[10px] text-gray-500 mt-3">با کلیک روی دکمه، تراکنش در کیف پول شما باز می‌شود.</p>
      </div>

    </main>
  );
}
