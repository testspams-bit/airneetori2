/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo.tsx';
import { BrandName } from './components/BrandName.tsx';
import { SocialModal } from './components/SocialModal.tsx';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const isDark = theme === 'dark';

  const [isSocialOpen, setIsSocialOpen] = useState(false);

  // Clear any legacy IndexedDB database so old cached logos are purged
  useEffect(() => {
    if (typeof indexedDB !== 'undefined') {
      try {
        indexedDB.deleteDatabase('air_neetwork_db');
      } catch {
        // ignore
      }
    }
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? 'bg-[#080808] text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Top Header / Navigation Bar */}
      <header
        className={`w-full transition-colors ${
          isDark ? 'bg-[#080808]' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand Logo & Wordmark - Click to open Instagram & YouTube links */}
          <button
            type="button"
            onClick={() => setIsSocialOpen(true)}
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] rounded-xl transition-transform active:scale-98 cursor-pointer text-left"
            title="Click to visit Instagram & YouTube channels"
            aria-label="Air NEETwork — Open Instagram and YouTube channels"
          >
            <Logo theme={theme} size="sm" />
          </button>

          {/* Sliding Theme Toggle Switch */}
          <button
            type="button"
            role="switch"
            aria-checked={isDark}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 ease-in-out border focus:outline-none flex items-center justify-between cursor-pointer select-none ${
              isDark
                ? 'bg-zinc-900 border-zinc-700'
                : 'bg-slate-200 border-slate-300'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark and light mode"
          >
            {/* Track Background Icons */}
            <Sun
              className={`w-3.5 h-3.5 ml-1 transition-opacity duration-200 ${
                isDark ? 'text-zinc-600 opacity-60' : 'text-[#0066FF] opacity-90'
              }`}
            />
            <Moon
              className={`w-3.5 h-3.5 mr-1 transition-opacity duration-200 ${
                isDark ? 'text-[#CCFF00] opacity-90' : 'text-slate-400 opacity-60'
              }`}
            />

            {/* Sliding Thumb Knob */}
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transition-transform duration-300 ease-out flex items-center justify-center ${
                isDark
                  ? 'translate-x-8 bg-black text-[#CCFF00] border border-zinc-700'
                  : 'translate-x-0 bg-white text-[#0066FF]'
              }`}
            >
              {isDark ? (
                <Moon className="w-3.5 h-3.5" />
              ) : (
                <Sun className="w-3.5 h-3.5" />
              )}
            </div>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-28 flex flex-col items-center justify-center text-center">
        <div className="text-xs font-mono tracking-widest text-zinc-500 flex items-center gap-2">
          <BrandName theme={theme} className="text-xs" />
          <span>· Mentorship Platform</span>
        </div>
      </main>

      {/* Instagram & YouTube Pop-up Modal */}
      <SocialModal
        isOpen={isSocialOpen}
        onClose={() => setIsSocialOpen(false)}
        theme={theme}
      />
    </div>
  );
}
