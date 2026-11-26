"use client";

import { useEffect, useState } from "react";
import { TonConnectButton, useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { Bell, Wallet, Zap, Rocket, Users, ArrowLeftRight, Gift, ShieldCheck, Pickaxe, X, Crown, ArrowUpCircle, BadgeCheck, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const [isMining, setIsMining] = useState(false);
  const [isVerified, setIsVerified] = useState(false); 
  const [showLevels, setShowLevels] = useState(false);
  
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
  const MINING_DURATION = 28800; 

  const levelsData = [
    { level: 1, daily: "34 JURY", deposit: "رایگان" },
    { level: 2, daily: "54 JURY", deposit: "27 JURY" },
    { level: 3, daily: "68 JURY", deposit: "34 JURY" },
    { level: 4, daily: "89 JURY", deposit: "44.5 JURY" },
    { level: 5, daily: "111 JURY", deposit: "55.5 JURY" },
  ];

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

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMining) {
      let time = MINING_DURATION;
      timer = setInterval(() => {
        time -= 1;
        const h = Math.floor(time / 3600).toString().padStart(2, "0");
        const m = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
        const s = (time % 60).toString().padStart(2, "0");
        setTimeLeft(`${h}:${m}:${s}`);
        if (time <= 0) {
          clearInterval(timer);
          setIsMining(false);
          setTimeLeft("00:00:00");
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isMining]);

  const handleStartMining = () => {
    if (!userFriendlyAddress) {
      tonConnectUI.openModal();
      return;
    }
    if (!isVerified) {
      alert("لطفا ابتدا در صفحه کیف پول، ولت خود را وریفای کنید.");
      return;
    }
    setIsMining(true);
    setTimeLeft("08:00:00");
  };

  return (
    <main className="flex flex-col items-center pt-4 px-3 pb-32 min-h-screen text-white bg-[#050505]">
      
      {/* هدر */}
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

      {/* کارت‌های موجودی */}
      <div className="w-full max-w-md flex gap-2 mb-4 z-10">
        <div className="flex-1 bg-[#111111] border border-[#8A6D1F] rounded-2xl p-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-gray-400 mb-1 flex items-center gap-1"><Wallet size={12} className="text-[#E6B333]"/> Your Balance</p>
            <p className="text-sm font-extrabold text-white">12,587.42 <span className="text-[10px] text-[#E6B333]">JURY</span></p>
          </div>
          <span className="text-gray-500 text-xs">{'>'}</span>
        </div>
        <div className="flex-1 bg-[#111111] border border-[#8A6D1F] rounded-2xl p-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-gray-400 mb-1 flex items-center gap-1"><Zap size={12} className="text-[#E6B333]"/> Mining Rate</p>
            <p className="text-sm font-extrabold text-white">+28.75 <span className="text-[10px] text-[#E6B333]">/h</span></p>
          </div>
          <p className="text-[10px] text-green-500 font-bold">↑ +12%</p>
        </div>
      </div>

      {/* کارت ماینینگ */}
      <div className="w-full max-w-md bg-[#111111] border border-[#8A6D1F] rounded-3xl p-5 mb-4 relative overflow-hidden z-10">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#1A1811] flex items-center justify-center border border-[#8A6D1F]">
              <Pickaxe className="text-[#E6B333]" size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isMining ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></span> 
                {isMining ? "Mining Active..." : "Mining Stopped"}
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

        <button 
          onClick={handleStartMining}
          disabled={isMining}
          className={`w-full font-extrabold text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition-all border ${
            isMining 
              ? "bg-[#1A1A1A] text-gray-500 border-white/5 cursor-not-allowed" 
              : "bg-gradient-to-r from-[#B8860B] via-[#F5D061] to-[#B8860B] text-black border-[#FFF8DC]/50 active:scale-95 shadow-[0_0_15px_rgba(245,208,97,0.3)]"
          }`}
        >
          {isMining ? (
            <>در حال ماینینگ... <span className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span></>
          ) : (
            <><Pickaxe size={24} /> MINE JURY (8h)</>
          )}
        </button>

        {/* کارت وضعیت وریفای ولت */}
        <div className={`mt-4 rounded-xl p-3 border flex items-center justify-between ${
          isVerified 
            ? "bg-green-500/10 border-green-500/20" 
            : "bg-red-500/10 border-red-500/20"
        }`}>
          <div className="flex items-center gap-2">
            {isVerified ? (
              <BadgeCheck className="text-green-500" size={18} />
            ) : (
              <AlertCircle className="text-red-500" size={18} />
            )}
            <div>
              <p className={`text-xs font-bold ${isVerified ? "text-green-500" : "text-red-500"}`}>
                {isVerified ? "کیف پول شما تایید شده است" : "کیف پول شما تایید نشده است"}
              </p>
              <p className="text-[9px] text-gray-400 mt-0.5">
                {isVerified ? "می‌توانید ماینینگ را شروع کنید" : "برای شروع ماینینگ، ابتدا ولت را تایید کنید"}
              </p>
            </div>
          </div>
          {!isVerified && (
            <Link href="/wallet" className="bg-red-500/20 hover:bg-red-500/30 text-red-400 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-red-500/30 transition">
              تایید ولت
            </Link>
          )}
        </div>
      </div>

      {/* کارت ارتقا */}
      <div className="w-full max-w-md bg-gradient-to-br from-[#1a1500] to-[#0a0a0a] border border-[#E6B333]/40 rounded-2xl p-4 mb-4 z-10 relative overflow-hidden shadow-[0_0_15px_rgba(230,179,51,0.1)]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6B333]/10 blur-3xl rounded-full"></div>
        
        <div className="flex justify-between items-center mb-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E6B333]/10 border border-[#E6B333]/30 flex items-center justify-center">
              <Rocket className="text-[#E6B333]" size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Boost Your Mining</p>
              <p className="text-[10px] text-gray-400">Upgrade your level to earn more!</p>
            </div>
          </div>
          <button 
            onClick={() => setShowLevels(true)}
            className="bg-gradient-to-r from-[#B8860B] to-[#F5D061] text-black text-xs font-bold px-4 py-2 rounded-xl border border-[#FFF8DC]/50 flex items-center gap-1 active:scale-95 transition shadow-[0_0_10px_rgba(230,179,51,0.2)]"
          >
            Upgrade <ArrowUpCircle size={14} />
          </button>
        </div>
        
        <div className="flex items-center gap-3 mt-4 relative z-10">
          <div className="flex items-center gap-1 bg-[#E6B333]/10 px-2 py-1 rounded-lg border border-[#E6B333]/20">
            <Crown size={12} className="text-[#E6B333]" />
            <span className="text-[10px] font-bold text-[#E6B333]">Lv.1</span>
          </div>
          <div className="flex-1 h-2.5 bg-black rounded-full overflow-hidden border border-[#8A6D1F]">
            <div className="h-full bg-gradient-to-r from-[#B8860B] to-[#F5D061] w-[10%] rounded-full shadow-[0_0_10px_rgba(245,208,97,0.5)]"></div>
          </div>
          <span className="text-[10px] text-gray-400">10%</span>
        </div>
      </div>

      {/* دکمه‌های میانبر */}
      <div className="w-full max-w-md grid grid-cols-4 gap-2 mb-4 z-10">
        <Link href="/friends" className="bg-[#111111] border border-[#8A6D1F] rounded-2xl p-3 flex flex-col items-center justify-center text-center">
          <Users size={22} className="text-[#E6B333] mb-1" />
          <p className="text-[10px] text-white font-bold mb-0.5">Referral</p>
          <p className="text-[8px] text-green-500 font-medium">+25% Bonus</p>
        </Link>
        <Link href="/swap" className="bg-[#111111] border border-[#8A6D1F] rounded-2xl p-3 flex flex-col items-center justify-center text-center">
          <ArrowLeftRight size={22} className="text-[#E6B333] mb-1" />
          <p className="text-[10px] text-white font-bold mb-0.5">Swap</p>
          <p className="text-[8px] text-gray-400 font-medium">Trade JURY</p>
        </Link>
        <Link href="/wallet" className="bg-[#111111] border border-[#8A6D1F] rounded-2xl p-3 flex flex-col items-center justify-center text-center">
          <Wallet size={22} className="text-[#E6B333] mb-1" />
          <p className="text-[10px] text-white font-bold mb-0.5">Wallet</p>
          <p className="text-[8px] text-gray-400 font-medium">Your Assets</p>
        </Link>
        <div className="bg-[#111111] border border-[#8A6D1F] rounded-2xl p-3 flex flex-col items-center justify-center text-center">
          <Gift size={22} className="text-[#E6B333] mb-1" />
          <p className="text-[10px] text-white font-bold mb-0.5">Rewards</p>
          <p className="text-[8px] text-green-500 font-medium">Daily Bonus</p>
        </div>
      </div>

      {/* مودال جدول سطوح */}
      {showLevels && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm bg-gradient-to-b from-[#1a1500] to-[#0a0a0a] border border-[#E6B333]/50 rounded-3xl p-5 shadow-[0_0_30px_rgba(230,179,51,0.2)] relative">
            <button 
              onClick={() => setShowLevels(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
              <Crown className="text-[#E6B333]" size={20} />
              <h2 className="text-sm font-bold text-white">جدول سطوح سپرده‌گذاری Jury Token</h2>
            </div>
            
            <p className="text-[10px] text-gray-400 mb-4 leading-relaxed">
              ایده خوبی است: هر سطح برابر با نصف درآمد روزانه همان سطح باشد. برای ارتقا، مبلغ جدید کم بشه یا سپرده هر سطح مشخص بشه.
            </p>

            <div className="space-y-2">
              {levelsData.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-black/40 border border-white/5 p-3 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#E6B333]/20 flex items-center justify-center text-[10px] font-bold text-[#E6B333]">
                      {item.level}
                    </div>
                    <span className="text-xs font-bold text-white">Level {item.level}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#E6B333] font-bold">{item.daily} / روزانه</p>
                    <p className="text-[9px] text-gray-400">سپرده: {item.deposit}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-5 bg-gradient-to-r from-[#B8860B] via-[#F5D061] to-[#B8860B] text-black font-bold text-sm py-3 rounded-xl border border-[#FFF8DC]/50 active:scale-95 transition">
              سپرده‌گذاری و ارتقا
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
