"use client";

import { useEffect, useState } from "react";
import { Copy, Send, CheckCircle2, Crown, Sparkles, TrendingUp, Wallet, ShieldCheck, BadgeCheck } from "lucide-react";

export default function Friends() {
  const [user, setUser] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [isVerified, setIsVerified] = useState(true); // فرض میکنیم وریفای شده (بعدا به دیتابیس وصل میشه)

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

  const referralCode = user?.id || "8233692637";
  const inviteLink = `https://t.me/Jurytoken_offcailbot?startapp=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToTelegram = () => {
    const text = `به Jury Token بپیوند! ⛏️\nMine • Earn • Grow\n${inviteLink}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="flex flex-col items-center pt-6 px-4 pb-28 min-h-screen text-white bg-[#050505]">
      
      {/* هدر لوکس */}
      <div className="w-full max-w-md bg-gradient-to-r from-[#1a1500] to-[#0a0a0a] border border-[#E6B333]/40 rounded-2xl p-4 mb-4 flex items-center justify-between shadow-[0_0_15px_rgba(230,179,51,0.15)] relative overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#E6B333]/20 border border-[#E6B333]/40 flex items-center justify-center text-[#E6B333] shrink-0 shadow-[0_0_10px_rgba(230,179,51,0.3)]">
            <Crown size={24} />
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-white flex items-center gap-2">
              دعوت از دوستان <Sparkles size={14} className="text-[#E6B333]" />
            </h1>
            <p className="text-[11px] text-gray-400 mt-0.5">دوستان خود را دعوت کنید و پاداش بگیرید</p>
          </div>
        </div>
      </div>

      {/* کارت وضعیت کیف پول (جدید) */}
      <div className={`w-full max-w-md border rounded-xl p-3 mb-4 flex items-center justify-between shadow-sm transition-all ${
        isVerified 
          ? "bg-gradient-to-r from-[#1a1500] to-[#111] border-[#E6B333]/50 shadow-[0_0_15px_rgba(230,179,51,0.1)]" 
          : "bg-[#111] border-white/10"
      }`}>
        <div className="flex items-center gap-2">
          <Wallet size={16} className={isVerified ? "text-[#E6B333]" : "text-gray-400"} />
          <span className="text-xs text-gray-300">وضعیت کیف پول:</span>
        </div>
        <div className="flex items-center gap-1.5">
          {isVerified ? (
            <>
              <span className="text-[11px] font-bold text-[#E6B333]">تایید شده</span>
              <BadgeCheck size={20} className="text-[#E6B333] drop-shadow-[0_0_8px_rgba(230,179,51,0.8)]" />
            </>
          ) : (
            <>
              <span className="text-[11px] font-bold text-red-400">تایید نشده</span>
              <ShieldCheck size={20} className="text-red-400" />
            </>
          )}
        </div>
      </div>

      {/* هشدار پاداش ۸ درصد */}
      <div className="w-full max-w-md bg-[#111111] border border-[#E6B333]/20 rounded-xl p-3 mb-4 flex items-start gap-2 shadow-[0_0_10px_rgba(230,179,51,0.05)]">
        <span className="text-[#E6B333] mt-0.5">ℹ️</span>
        <p className="text-[11px] text-gray-300 leading-relaxed">
          سیستم پاداش معرفی فعال، <span className="text-[#E6B333] font-bold">۸٪</span> از استخراج هر کاربر فعال به عنوان پاداش به شما تعلق می‌گیرد.
        </p>
      </div>

      {/* کارت کپی لینک و اشتراک */}
      <div className="w-full max-w-md bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-[#8A6D1F]/50 rounded-2xl p-4 mb-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <div className="flex gap-2 mb-4">
          <button 
            onClick={copyToClipboard} 
            className="flex-1 bg-[#1A1A1A] hover:bg-[#222] text-white text-xs font-bold py-3.5 rounded-xl border border-white/5 transition flex items-center justify-center gap-2 active:scale-95"
          >
            <Copy size={16} className={copied ? "text-green-500" : ""} /> 
            {copied ? "کپی شد!" : "کپی لینک"}
          </button>
          <button 
            onClick={shareToTelegram} 
            className="flex-1 bg-gradient-to-r from-[#B8860B] via-[#F5D061] to-[#B8860B] text-black text-xs font-extrabold py-3.5 rounded-xl shadow-[0_0_15px_rgba(230,179,51,0.3)] transition flex items-center justify-center gap-2 active:scale-95 border border-[#FFF8DC]/50"
          >
            <Send size={16} /> اشتراک در تلگرام
          </button>
        </div>

        <div className="bg-black/60 border border-[#8A6D1F]/30 rounded-xl p-4 flex justify-between items-center">
          <div>
            <p className="text-[10px] text-gray-400 mb-1">کد معرف اختصاصی شما</p>
            <p className="text-xl font-extrabold text-white tracking-widest drop-shadow-md">{referralCode}</p>
          </div>
          <div className="bg-gradient-to-r from-[#E6B333]/20 to-[#8A6D1F]/20 border border-[#E6B333]/30 rounded-lg px-3 py-1.5 text-center shadow-inner">
            <p className="text-[#F5D061] text-[12px] font-extrabold">۸٪</p>
            <p className="text-[8px] text-gray-400">از درآمد دوستان</p>
          </div>
        </div>
      </div>

      {/* آمار لوکس */}
      <div className="w-full max-w-md grid grid-cols-2 gap-3 mb-5">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 rounded-2xl p-4 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 blur-2xl rounded-full"></div>
          <p className="text-[10px] text-gray-400 mb-2 flex items-center justify-center gap-1">
            <Crown size={12} className="text-[#E6B333]"/> تعداد کل دعوت‌ها
          </p>
          <p className="text-3xl font-extrabold text-white mb-1">0</p>
          <p className="text-[10px] text-green-500 flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> 0 کاربر فعال
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 rounded-2xl p-4 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#E6B333]/10 blur-2xl rounded-full"></div>
          <p className="text-[10px] text-gray-400 mb-2 flex items-center justify-center gap-1">
            <Wallet size={12} className="text-[#E6B333]"/> درآمد در انتظار
          </p>
          <p className="text-3xl font-extrabold text-[#E6B333] drop-shadow-[0_0_8px_rgba(230,179,51,0.4)] mb-1">+0.00</p>
          <p className="text-[10px] text-gray-500">کل پاداش دریافتی</p>
        </div>
      </div>

      {/* لیست دوستان */}
      <div className="w-full max-w-md flex justify-between items-center mb-2 px-1">
        <p className="text-sm font-bold text-white flex items-center gap-2">
          <TrendingUp size={16} className="text-[#E6B333]"/> لیست دوستان دعوت‌شده (0)
        </p>
        <p className="text-xs text-[#E6B333] cursor-pointer hover:underline">مشاهده همه {'>'}</p>
      </div>
      
      <div className="w-full max-w-md bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-[#E6B333]/5 border border-[#E6B333]/10 flex items-center justify-center mb-3">
           <CheckCircle2 size={24} className="text-gray-600" />
        </div>
        <p className="text-gray-500 text-xs">هنوز کسی را دعوت نکرده‌اید.</p>
        <p className="text-[10px] text-gray-600 mt-1">با اشتراک‌گذاری لینک، اولین پاداش خود را بگیرید!</p>
      </div>

    </main>
  );
}
