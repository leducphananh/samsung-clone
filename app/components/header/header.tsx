'use client';
import { Menu, Search, ShoppingCart, UserRound, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DesktopNav from './desktop-nav';
import MobileDrawer from './mobile-drawer';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="relative z-50 mx-auto flex w-full max-w-360 items-center gap-4 bg-white px-4 py-3 lg:gap-8 lg:px-3 lg:py-4 lg:pt-8">
        {/* Logo */}
        <Link href="/" aria-label="Samsung Home" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="Samsung Logo"
            width={100}
            height={27}
            className="lg:w-32.5"
          />
        </Link>

        {/* Desktop nav (hidden on mobile) */}
        <div className="hidden flex-1 lg:flex lg:items-center lg:justify-between">
          <DesktopNav />

          {/* Desktop icon actions */}
          <div className="flex items-center gap-1">
            <button
              className="cursor-pointer p-2 text-[#1e1e1e] transition-colors hover:text-[#1428a0]"
              aria-label="Search">
              <Search size={22} />
            </button>
            <Link
              href="/cart"
              className="cursor-pointer p-2 text-[#1e1e1e] transition-colors hover:text-[#1428a0]"
              aria-label="Cart">
              <ShoppingCart size={22} />
            </Link>
            <Link
              href="/profile"
              className="cursor-pointer p-2 text-[#1e1e1e] transition-colors hover:text-[#1428a0]"
              aria-label="Account">
              <UserRound size={22} />
            </Link>
          </div>
        </div>

        {/* Mobile: right-side icons + hamburger */}
        <div className="ml-auto flex items-center gap-1 lg:hidden">
          <button
            className="cursor-pointer p-2 text-[#1e1e1e]"
            aria-label="Search">
            <Search size={20} />
          </button>
          <Link
            href="/cart"
            className="cursor-pointer p-2 text-[#1e1e1e]"
            aria-label="Cart">
            <ShoppingCart size={20} />
          </Link>
          <Link
            href="/profile"
            className="cursor-pointer p-2 text-[#1e1e1e]"
            aria-label="Account">
            <UserRound size={20} />
          </Link>
          <button
            className="p-2 text-[#1e1e1e]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(prev => !prev)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer (rendered outside header to avoid z-index issues) */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Header;
