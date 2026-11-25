"use client";

import { useEffect, useState } from "react";

export default function Friends() {
  const [user, setUser] = useState<any>(null);
  const [copied, setCopied] = useState(false);

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

  const referralCode = user?.id || "8233692637"; // آیدی کاربر یا یه عدد تستی
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
    <main className="flex flex-col items-center pt-6 px-4 pb-24 min-h-screen">
      
      {/* هدر */}
      <div className="w-full max-w-md flex items-center gap-3 bg-black/60 border border-yellow-500/30 rounded-xl p-4 mb-4 backdrop-blur-md">
        <span className="text-3xl">👥</span>
        <div>
          <h1 className="text-lg font-bold text-white">دعوت از دوستان</h1>
          <p className="text-xs text-gray-400">دوستان خود را دعوت کنید و از استخراج آن‌ها پاداش بگیرید</p>
        </div>
      </div>

      {/* هشدار پاداش */}
      <div className="w-full max-w-md bg-[#151515]/90 border border-yellow-500/20 rounded-xl p-3 mb-4 flex items-start gap-2">
        <span className="text-yellow-500 mt-0.5">ℹ️</span>
        <p className="text-xs text-gray-300 leading-relaxed">
          سیستم پاداش معرفی فعال، <span className="text-yellow-500 font-bold">۸٪</span> تا از استخراج هر کاربر فعال به عنوان پاداش به شما تعلق می‌گیرد.
        </p>
      </div>

      {/* کارت کپی لینک و اشتراک */}
      <div className="w-full max-w-md bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 mb-4">
        <div className="flex gap-2 mb-3">
          <button onClick={copyToClipboard} className="flex-1 bg-[#2c2c2e] hover:bg-[#3c3c3e] text-white text-xs font-bold py-3 rounded-xl border border-white/5 transition flex items-center justify-center gap-1">
            <span>📋</span> کپی لینک دعوت
          </button>
          <button onClick={shareToTelegram} className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black text-xs font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(234,179,8,0.3)] transition flex items-center justify-center gap-1 active:scale-95">
            <span>✈️</span> اشتراک در تلگرام
          </button>
        </div>

        <div className="bg-black/50 border border-white/5 rounded-xl p-3 flex justify-between items-center">
          <div>
            <p className="text-[10px] text-gray-400 mb-1">کد معرف شما</p>
            <p className="text-md font-bold text-white tracking-widest">{referralCode}</p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-2 py-1 text-yellow-500 text-[10px] font-bold text-center">
            ۸٪ از جمع‌آوری‌های دوستان
          </div>
        </div>
      </div>

      {/* آمار */}
      <div className="w-full max-w-md grid grid-cols-2 gap-3 mb-4">
        <div className="bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
          <p className="text-[10px] text-gray-400 mb-1 flex items-center justify-center gap-1"><span>👥</span> تعداد کل دعوت‌ها</p>
          <p className="text-2xl font-bold text-white">0</p>
          <p className="text-[10px] text-green-500 mt-1 flex items-center justify-center gap-1"><span>🟢</span> 0 کاربر فعال</p>
        </div>
        <div className="bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 text-center">
          <p className="text-[10px] text-gray-400 mb-1 flex items-center justify-center gap-1"><span>💰</span> درآمد در انتظار</p>
          <p className="text-2xl font-bold text-yellow-500">+0.00</p>
          <p className="text-[10px] text-gray-500 mt-1">کل پاداش دریافتی</p>
        </div>
      </div>

      {/* لیست دوستان */}
      <div className="w-full max-w-md flex justify-between items-center mb-2 px-1">
        <p className="text-sm font-bold text-white">👥 لیست دوستان دعوت‌شده (0)</p>
        <p className="text-xs text-yellow-500 cursor-pointer">همه {'>'}</p>
      </div>
      
      <div className="w-full max-w-md bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center">
        <p className="text-gray-500 text-xs">هنوز کسی را دعوت نکرده‌اید.</p>
      </div>

    </main>
  );
}
