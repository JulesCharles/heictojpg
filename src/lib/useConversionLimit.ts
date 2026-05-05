"use client";

import { useState, useCallback, useEffect } from "react";

const DAILY_FREE_LIMIT = 5;
const STORAGE_KEY = "heictojpg_conversions";

interface ConversionData {
  date: string;
  count: number;
}

function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function getStoredData(): ConversionData {
  if (typeof window === "undefined") return { date: getTodayKey(), count: 0 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: getTodayKey(), count: 0 };
    const data: ConversionData = JSON.parse(raw);
    if (data.date !== getTodayKey()) {
      return { date: getTodayKey(), count: 0 };
    }
    return data;
  } catch {
    return { date: getTodayKey(), count: 0 };
  }
}

export function useConversionLimit() {
  const [data, setData] = useState<ConversionData>({ date: getTodayKey(), count: 0 });

  useEffect(() => {
    setData(getStoredData());
  }, []);

  const conversionsLeft = Math.max(0, DAILY_FREE_LIMIT - data.count);
  const isLimited = conversionsLeft <= 0;

  const recordConversion = useCallback(() => {
    setData((prev) => {
      const today = getTodayKey();
      const newData: ConversionData = {
        date: today,
        count: prev.date === today ? prev.count + 1 : 1,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      return newData;
    });
  }, []);

  return { conversionsLeft, isLimited, recordConversion, totalUsed: data.count };
}
