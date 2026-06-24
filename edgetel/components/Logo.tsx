export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {/* Icon */}
      <div className="flex items-center justify-center rounded-full bg-[#EAF3FF] p-2">
        <svg
          viewBox="0 0 64 64"
          className="w-10 h-10 text-[#1E5AA8]"
          fill="none"
        >
          <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="6" />
          <path d="M26.5 35.5C30 32 36 32 39.5 35.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M23 31C27 27 34 27 38 31" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M19 27C24 21.5 32 21.5 36 27" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="33" cy="41" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Text */}
      <div className="leading-tight">
        <div className="flex text-xl font-bold tracking-tight">
          <span className="text-[#111111]">edge</span>
          <span className="text-[#22A06B]">tel</span>
        </div>
        <p className="text-[11px] text-gray-500">
          Technology & Networks Ltd.
        </p>
      </div>
    </div>
  );
}