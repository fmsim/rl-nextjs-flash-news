import Image from "next/image";
import Link from "next/link";

import logoPng from "@/public/logo.png";
import { NavItem } from "./NavItem";
import { NAV_ITEMS } from "@/app/constant";

export function Nav() {
  return (
    <div>
      {/* Logo */}
      <Link href="/">
        <Image src={logoPng} alt="Logo" className="w-40" />
      </Link>

      {/* Nav list */}
      <nav className="space-y-4 mt-4">
        {NAV_ITEMS.map((navItem) => (
          <NavItem key={navItem.category} {...navItem} />
        ))}
      </nav>
    </div>
  );
}
