'use client';
import { NavItem, navItems } from '@/app/constants/nav.constant';
import clsx from 'clsx';
import { ChevronDown, Search, ShoppingCart, UserRound, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MobileDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleClose = () => {
    setExpandedId(null);
    onClose();
  };

  const toggleAccordion = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={handleClose}
        className={clsx(
          'fixed inset-0 z-50 bg-black/50 transition-[opacity,visibility] duration-300 ease-out',
          open ? 'visible opacity-100' : 'invisible opacity-0 delay-300',
        )}
      />

      {/* Drawer panel – slides in from the right */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={clsx(
          'fixed top-0 right-0 bottom-0 z-60 flex w-[85vw] max-w-360 flex-col overflow-y-auto bg-white transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}>
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] px-5 py-4">
          <Link href="/" onClick={handleClose}>
            <Image src="/logo.svg" alt="Samsung Logo" width={90} height={24} />
          </Link>
          <button
            onClick={handleClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-[#1e1e1e] transition-colors hover:bg-[#f5f5f5]">
            <X size={22} />
          </button>
        </div>

        {/* Nav list */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto">
          <ul>
            {navItems.map((item: NavItem) => {
              const hasSubItems = !!(
                item.categories?.length || item.discover?.length
              );
              const isExpanded = expandedId === item.id;

              return (
                <li key={item.id} className="border-b border-[#f0f0f0]">
                  {/* Top-level row */}
                  <div className="flex items-center justify-between">
                    <Link
                      href="#"
                      onClick={handleClose}
                      className="flex-1 px-5 py-4 text-[15px] font-bold text-[#1e1e1e] transition-colors hover:text-[#1428a0]">
                      {item.name}
                    </Link>

                    {hasSubItems && (
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={isExpanded}
                        aria-label={`Expand ${item.name}`}
                        className="flex h-full items-center px-5 py-4 text-[#767676] transition-colors hover:text-[#1428a0]">
                        <ChevronDown
                          size={18}
                          className={clsx(
                            'transition-transform duration-200 ease-out',
                            isExpanded ? 'rotate-180' : 'rotate-0',
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Accordion sub-items */}
                  {hasSubItems && (
                    <div
                      className={clsx(
                        'overflow-hidden transition-[max-height] duration-300 ease-out',
                        isExpanded ? 'max-h-250' : 'max-h-0',
                      )}>
                      <div className="bg-[#f7f7f7] px-5 pt-2 pb-4">
                        {/* Categories section */}
                        {item.categories && item.categories.length > 0 && (
                          <>
                            <p className="mt-2 mb-2 text-[11px] font-bold tracking-widest text-[#767676] uppercase">
                              {item.name}
                            </p>
                            <ul className="flex flex-col gap-1">
                              {item.categories.map((cat, i) => (
                                <li key={i}>
                                  <Link
                                    href="#"
                                    onClick={handleClose}
                                    className="block py-1.5 text-[14px] text-[#1e1e1e] transition-colors hover:text-[#1428a0]">
                                    {cat.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {/* Discover section */}
                        {item.discover && item.discover.length > 0 && (
                          <>
                            <p className="mt-4 mb-2 text-[11px] font-bold tracking-widest text-[#767676] uppercase">
                              Khám phá
                            </p>
                            <ul className="flex flex-col gap-1">
                              {item.discover.map((link, i) => (
                                <li key={i}>
                                  <Link
                                    href="#"
                                    onClick={handleClose}
                                    className="block py-1.5 text-[14px] text-[#1428a0] transition-opacity hover:opacity-70">
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer actions */}
        <div className="flex items-center gap-4 border-t border-[#e5e5e5] px-5 py-4">
          <button
            className="flex items-center gap-2 text-[14px] text-[#1e1e1e]"
            aria-label="Search">
            <Search size={18} /> Tìm kiếm
          </button>
          <button
            className="flex items-center gap-2 text-[14px] text-[#1e1e1e]"
            aria-label="Cart">
            <ShoppingCart size={18} /> Giỏ hàng
          </button>
          <button
            className="flex items-center gap-2 text-[14px] text-[#1e1e1e]"
            aria-label="Account">
            <UserRound size={18} /> Tài khoản
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
