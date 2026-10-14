import React, { useState } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface AshvaniSirPhotoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadge?: boolean;
}

export const AshvaniSirPhoto: React.FC<AshvaniSirPhotoProps> = ({
  className = '',
  size = 'hero',
  showBadge = true
}) => {
  const { teacherPhoto } = useApp();
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative group ${className}`}>
      {/* Decorative Outer Glow & Border */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-orange-500 via-amber-400 to-blue-600 shadow-2xl shadow-blue-950/40">
        <div className="relative rounded-[22px] overflow-hidden bg-slate-900 aspect-[4/5] sm:aspect-square flex items-center justify-center">
          
          {/* Main Photo Image */}
          {!hasError ? (
            <img
              src={teacherPhoto}
              alt="Ashvani Sir - Head Faculty & Founder TARGET Coaching Centre"
              onError={() => setHasError(true)}
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-all duration-300"
              loading="eager"
            />
          ) : (
            // Dedicated Graphic Frame displaying Ashvani Sir's Official Verified Identity
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white p-6 relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-1 mb-4 shadow-xl">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl font-black text-orange-400">A</span>
                </div>
              </div>
              <div className="text-2xl font-black text-white text-center">Ashvani Sir</div>
              <div className="text-xs text-orange-400 font-bold uppercase tracking-wider text-center mt-1">
                Founder, Director & Main Faculty
              </div>
              <p className="text-[11px] text-slate-300 text-center mt-2 max-w-[240px]">
                Targeting SSC, Railway, UP Police, UPSSSC PET & Army Agniveer
              </p>
            </div>
          )}

          {/* Bottom Gradient Overlay for text readability */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-14 pb-4 px-4 text-white pointer-events-none">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-black flex items-center space-x-1.5 text-white">
                  <span>Ashvani Sir</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                </div>
                <div className="text-[11px] font-semibold text-orange-300">
                  Head Faculty & Founder
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-wider shadow">
                10+ Yrs Exp
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Experience Badge */}
      {showBadge && (
        <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white text-slate-950 rounded-2xl p-3 shadow-2xl border-2 border-orange-500/40 flex items-center space-x-3 z-20">
          <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black shadow-md shadow-orange-500/30">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-900">
              TARGET Coaching Centre
            </div>
            <div className="text-[10px] font-bold text-orange-600">
              Direct Guidance • ₹700/mo
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
