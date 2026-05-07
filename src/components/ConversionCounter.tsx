"use client";

import Link from "next/link";

interface ConversionCounterProps {
  conversionsLeft: number;
  total?: number;
}

export default function ConversionCounter({ conversionsLeft, total = 5 }: ConversionCounterProps) {
  const percentage = (conversionsLeft / total) * 100;
  const barColor =
    conversionsLeft > 2 ? "bg-green-500" : conversionsLeft > 0 ? "bg-orange-500" : "bg-red-500";
  const textColor =
    conversionsLeft > 2 ? "text-green-700" : conversionsLeft > 0 ? "text-orange-700" : "text-red-700";

  return (
    <div className="w-full space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className={`font-medium ${textColor}`}>
          {conversionsLeft > 0
            ? `${conversionsLeft}/${total} conversion(s) gratuite(s) restante(s)`
            : "Limite atteinte"}
        </span>
        {conversionsLeft === 0 && (
          <Link
            href="/pricing"
            className="text-blue-600 font-semibold hover:underline"
          >
            Passer en Pro
          </Link>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className={`${barColor} h-1.5 rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
