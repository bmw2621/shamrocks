import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import FullNav from "./FullNav";
import LINKS from "./links.json";
import MobileNav from "./MobileNav";

/**
 *
 * Component
 *
 */
const Nav: FC = async () => {
  return (
    <nav className="w-full justify-center border-b p-2 flex bg-base-200 z-50">
      <div className="w-full max-w-4xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image width={80} height={80} src="/cvma_logo.png" alt="CVMA" />
          <div className="flex flex-col font-bold">
            <h2 className="text-lg/[15px]">CVMA 25-2</h2>
            <h2 className="text-primary text-3xl/[25px]">Shamrocks</h2>
          </div>
        </Link>
        <MobileNav links={LINKS} />
        <FullNav links={LINKS} />
      </div>
    </nav>
  );
};

export default Nav;
