"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Trash2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getHistory, clearHistory, type ConversionEntry } from "@/lib/conversionHistory";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / 1024 / 1024).toFixed(2)} Mo`;
}

export default function ConversionHistoryClient() {
  const [history, setHistory] = useState<ConversionEntry[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleClear = () => {
    clearHistory();
    setHistory([]);
  };

  if (history.length === 0) {
    return (
      <div className="text-center py-16">
        <FileText className="mx-auto h-12 w-12 text-gray-300 mb-4" />
        <p className="text-gray-500 mb-2">Aucune conversion dans l&apos;historique.</p>
        <p className="text-gray-400 text-sm mb-6">
          Vos conversions apparaitront ici automatiquement.
        </p>
        <Link href="/">
          <Button>Commencer une conversion</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">{history.length} conversion(s)</p>
        <Button variant="outline" size="sm" onClick={handleClear}>
          <Trash2 className="mr-2 h-4 w-4" />
          Effacer l&apos;historique
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-100">
        {history.map((entry, i) => (
          <div key={i} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-blue-600">
                  {entry.outputFormat.toUpperCase()}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{entry.filename}</p>
                <p className="text-xs text-gray-400">
                  {entry.inputFormat.toUpperCase()} &rarr; {entry.outputFormat.toUpperCase()} &middot; {formatSize(entry.size)}
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-400 shrink-0 ml-4">{formatDate(entry.date)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
