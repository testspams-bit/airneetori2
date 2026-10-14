import React from 'react';
import { Logo } from './Logo.tsx';
import { BrandName } from './BrandName.tsx';

interface FooterProps {
  theme: 'dark' | 'light';
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onOpenBooking }) => {
  const isDark = theme === 'dark';

  return (
    <footer
      className={`border-t py-16 transition-colors ${
        isDark
          ? 'bg-[#050505] border-zinc-900 text-zinc-400'
          : 'bg-slate-50 border-slate-200 text-slate-500'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div className="max-w-sm">
            <Logo theme={theme} size="sm" className="mb-4" />
            <p className="text-xs leading-relaxed">
              Transforming NEET UG preparation through 1-on-1 strategic mentorship with top All India
              Rankers from AIIMS and premier government medical institutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-xs font-mono">
            <div>
              <div className={`font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Mentorship
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="#strategy" className="hover:text-white transition-colors">
                    1-on-1 Strategy System
                  </a>
                </li>
                <li>
                  <a href="#mentors" className="hover:text-white transition-colors">
                    AIIMS & GMC Rankers
                  </a>
                </li>
                <li>
                  <a href="#diagnostic" className="hover:text-white transition-colors">
                    Score Gap Diagnostic
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className={`font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Aspirant Focus
              </div>
              <ul className="space-y-2">
                <li>
                  <button onClick={onOpenBooking} className="hover:text-white transition-colors text-left">
                    Class 12 Board + NEET
                  </button>
                </li>
                <li>
                  <button onClick={onOpenBooking} className="hover:text-white transition-colors text-left">
                    Dropper / Repeater Cohort
                  </button>
                </li>
                <li>
                  <button onClick={onOpenBooking} className="hover:text-white transition-colors text-left">
                    Negative Mark Elimination
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div className={`font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Direct Contact
              </div>
              <ul className="space-y-2">
                <li>support@airneetwork.com</li>
                <li>New Delhi, India</li>
                <li>
                  <button
                    onClick={onOpenBooking}
                    className={`font-semibold underline ${
                      isDark ? 'text-[#CCFF00]' : 'text-[#0066FF]'
                    }`}
                  >
                    Request Strategy Call
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono ${
            isDark ? 'border-zinc-900 text-zinc-500' : 'border-slate-200 text-slate-500'
          }`}
        >
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()}</span>
            <BrandName theme={theme} className="text-[11px]" />
            <span>. All rights reserved.</span>
          </div>
          <div className="text-center sm:text-right">
            Independent student mentorship platform. NEET is a registered trademark of NTA.
          </div>
        </div>
      </div>
    </footer>
  );
};
