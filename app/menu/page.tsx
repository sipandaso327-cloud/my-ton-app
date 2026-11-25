"use client";

export default function Menu() {
  return (
    <main className="flex flex-col items-center pt-6 px-4 pb-24">
      
      {/* هدر */}
      <div className="w-full max-w-md flex items-center gap-3 bg-black/60 border border-yellow-500/30 rounded-xl p-4 mb-6 backdrop-blur-md">
        <span className="text-3xl">⚙️</span>
        <div>
          <h1 className="text-lg font-bold text-white">منو</h1>
          <p className="text-xs text-gray-400">خدمات و قابلیت‌های Jury Token</p>
        </div>
      </div>

      {/* گرید منو */}
      <div className="w-full max-w-md grid grid-cols-2 gap-3">
        
        {/* رتبه‌بندی */}
        <div className="bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 flex flex-col items-center text-center cursor-pointer hover:border-yellow-500/50 transition">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-3">
            <span className="text-2xl">🏆</span>
          </div>
          <h3 className="text-sm font-bold text-white mb-1">جدول رتبه‌بندی</h3>
          <p className="text-[10px] text-gray-400">رتبه‌بندی ماینرها و معرفی‌ها</p>
        </div>

        {/* استیکینگ */}
        <div className="bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 flex flex-col items-center text-center cursor-pointer hover:border-yellow-500/50 transition">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-3">
            <span className="text-2xl">🔗</span>
          </div>
          <h3 className="text-sm font-bold text-white mb-1">استیکینگ</h3>
          <p className="text-[10px] text-gray-400">کسب تا ۳۵٪ APY</p>
        </div>

        {/* ماموریت‌ها */}
        <div className="bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 flex flex-col items-center text-center cursor-pointer hover:border-yellow-500/50 transition">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-3">
            <span className="text-2xl">📋</span>
          </div>
          <h3 className="text-sm font-bold text-white mb-1">ماموریت‌ها</h3>
          <p className="text-[10px] text-gray-400">ماموریت‌ها و پاداش‌ها</p>
        </div>

        {/* سفیر */}
        <div className="bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 flex flex-col items-center text-center cursor-pointer hover:border-yellow-500/50 transition">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-3">
            <span className="text-2xl">👑</span>
          </div>
          <h3 className="text-sm font-bold text-white mb-1">سفیر</h3>
          <p className="text-[10px] text-gray-400">همکاری در فروش تا ۱۲.۵٪</p>
        </div>

        {/* برج */}
        <div className="bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 flex flex-col items-center text-center cursor-pointer hover:border-yellow-500/50 transition">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-3">
            <span className="text-2xl">🏢</span>
          </div>
          <h3 className="text-sm font-bold text-white mb-1">برج</h3>
          <p className="text-[10px] text-gray-400">برج کوانتومی و مزرعه استخراج</p>
        </div>

        {/* VIP */}
        <div className="bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 flex flex-col items-center text-center cursor-pointer hover:border-yellow-500/50 transition">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-3">
            <span className="text-2xl">💎</span>
          </div>
          <h3 className="text-sm font-bold text-white mb-1">Genesis VIP</h3>
          <p className="text-[10px] text-gray-400">آثار باستانی و کلکسیون‌ها</p>
        </div>

        {/* قرعه‌کشی (تمام عرض) */}
        <div className="col-span-2 bg-[#151515]/90 backdrop-blur-xl rounded-2xl p-4 border border-white/10 flex items-center justify-between cursor-pointer hover:border-yellow-500/50 transition">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
              <span className="text-2xl">🎮</span>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">سرگرمی و قرعه‌کشی</h3>
              <p className="text-[10px] text-gray-400">۱۰۰ جایزه • ۵ روز • ۱۰۰۰ JURY</p>
            </div>
          </div>
          <span className="text-gray-500">{'>'}</span>
        </div>

      </div>
    </main>
  );
}
