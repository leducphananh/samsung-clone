'use client';
import { NavItem, navItems } from '@/constants/nav.constant';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

const DesktopNav = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearEnterTimer = useCallback(() => {
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(
    (id: number, delayMs = 150) => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
        leaveTimerRef.current = null;
      }

      if (activeId === id) {
        clearEnterTimer();
        return;
      }

      clearEnterTimer();
      if (delayMs <= 0) {
        setActiveId(id);
        return;
      }

      enterTimerRef.current = setTimeout(() => setActiveId(id), delayMs);
    },
    [activeId, clearEnterTimer],
  );

  const handleMouseLeave = useCallback(() => {
    clearEnterTimer();
    leaveTimerRef.current = setTimeout(() => setActiveId(null), 120);
  }, [clearEnterTimer]);

  useEffect(() => {
    const handleScroll = () => {
      setActiveId(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearEnterTimer();
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
      }
    };
  }, [clearEnterTimer]);

  return (
    <div className="relative hidden lg:block" onMouseLeave={handleMouseLeave}>
      <nav aria-label="Primary navigation">
        <ul className="flex items-center" role="menubar">
          {navItems.map((item: NavItem) => {
            const hasMegamenu = !!(
              item.categories?.length || item.discover?.length
            );
            const isActive = activeId === item.id;

            return (
              <li
                key={item.id}
                role="none"
                className="relative"
                onMouseEnter={() =>
                  hasMegamenu
                    ? handleMouseEnter(item.id, 200)
                    : setActiveId(null)
                }>
                {/* Level-0 nav link */}
                <Link
                  href="#"
                  role="menuitem"
                  aria-haspopup={hasMegamenu ? 'true' : undefined}
                  aria-expanded={hasMegamenu ? isActive : undefined}
                  className={clsx(
                    'flex h-11.5 items-center justify-center p-3 pb-4 text-[16px] font-bold',
                    'relative transition-colors duration-200',
                    'after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5',
                    'after:origin-left after:scale-x-0 after:bg-[#006bea]',
                    'after:transition-transform after:duration-200',
                    isActive
                      ? 'text-[#006bea] after:scale-x-100'
                      : 'hover:text-[#006bea] hover:after:scale-x-100',
                  )}>
                  {item.name}
                </Link>

                {/* Megamenu panel */}
                {hasMegamenu && (
                  <div
                    role="region"
                    aria-label={`${item.name} submenu`}
                    onMouseEnter={() => handleMouseEnter(item.id, 0)}
                    className={clsx(
                      'fixed top-26.5 right-0 left-0 z-40 transition-[opacity,transform,visibility] duration-200 ease-out',
                      isActive
                        ? 'pointer-events-auto visible translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-2 opacity-0',
                    )}>
                    <div className="w-full bg-white">
                      <div className="mx-auto flex max-w-360 p-8 pt-5">
                        {/* LEFT: Category links */}
                        {item.categories && item.categories.length > 0 && (
                          <div className="mx-auto max-w-200 flex-1">
                            <ul className="grid grid-cols-7 gap-4">
                              {item.categories.map((cat, i) => (
                                <li key={i} className="px-0.5 py-4">
                                  <Link
                                    href="#"
                                    className="group flex flex-col items-center justify-center">
                                    <Image
                                      width={88}
                                      height={88}
                                      src={cat.imgSrc}
                                      alt={cat.label}
                                      className="transition-transform duration-500 ease-[cubic-bezier(0.35,0,0.36,1)] group-hover:scale-110"
                                    />
                                    <span className="mt-2 text-[14px] font-bold">
                                      {cat.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* DIVIDER */}
                        {item.categories?.length && item.discover?.length && (
                          <div className="ml-20 w-px shrink-0 bg-[#e5e5e5]" />
                        )}

                        {/* RIGHT: Khám phá links */}
                        {item.discover && item.discover.length > 0 && (
                          <div className="w-90 shrink-0 pl-10">
                            <p className="mb-2 text-[14px] font-bold text-[#757575] uppercase">
                              Khám phá
                            </p>
                            <ul className="flex flex-col gap-2">
                              {item.discover.map((link, i) => (
                                <li key={i}>
                                  <Link
                                    href="#"
                                    className="flex items-center gap-1.5 text-[16px] text-[#1e1e1e] transition-opacity duration-200 hover:opacity-60">
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop backdrop */}
      <div
        aria-hidden="true"
        className={clsx(
          'pointer-events-none fixed inset-0 top-26.5 z-30 bg-black/40 transition-[opacity,visibility] duration-200 ease-out',
          activeId !== null ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  );
};

export default DesktopNav;
