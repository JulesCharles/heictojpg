"use client";

const HISTORY_KEY = "heictojpg_conversion_history";
const MAX_ENTRIES = 30;

export interface ConversionEntry {
  filename: string;
  inputFormat: string;
  outputFormat: string;
  date: string;
  size: number;
}

export function getHistory(): ConversionEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addToHistory(entry: Omit<ConversionEntry, "date">) {
  const history = getHistory();
  history.unshift({ ...entry, date: new Date().toISOString() });
  if (history.length > MAX_ENTRIES) history.length = MAX_ENTRIES;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
}
