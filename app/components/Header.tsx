import { Menu, Search, ShoppingCart, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-360 items-center justify-between px-3 py-4">
      <Link href="/">
        <Image src="/logo.svg" alt="Samsung Logo" width={106} height={29} />
      </Link>

      <div className="flex items-center gap-1">
        <button className="p-2">
          <Search />
        </button>
        <button className="p-2">
          <ShoppingCart />
        </button>
        <button className="p-2">
          <UserRound />
        </button>
        <button className="p-2">
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;
