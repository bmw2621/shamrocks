import {
  ShamrockLink,
  ShamrockLinkChild,
  ShamrockLinkParent,
} from "@/app/typedefs/link";
import Link from "next/link";
import { FC } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Details from "./Details";

/**
 * Types
 */
type Props = {
  links: ShamrockLink[];
};

/**
 *
 * Component
 *
 */
const MobileNav: FC<Props> = ({ links }) => {
  return (
    <Details className="block md:hidden group/mobile-nav z-50">
      <summary className="btn btn-sm hover:btn-primary">
        <FaBars />
      </summary>
      <div
        className="
                absolute 
                right-2
                flex
                flex-col
                opacity-0
                -translate-y-full
                group-open/mobile-nav:opacity-100
                group-open/mobile-nav:translate-y-0
                duration-700
                transition-all
            "
      >
        {links.map((link) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          if (link.href) {
            const { href, label } = link as ShamrockLinkChild;
            return (
              <Link href={href} key={label}>
                <button className="btn btn-sm hover:btn-primary btn-block w-full">
                  {label}
                </button>
              </Link>
            );
          }
          const { label, children: childLinks } = link as ShamrockLinkParent;
          return (
            <Details key={label} className="group/has-children w-full">
              <summary className="btn btn-sm w-full hover:btn-primary">
                {link.label}
                <FaChevronDown className="group-open/has-children:rotate-180 transition-all duration-500" />
              </summary>
              {childLinks.map((link2) => {
                return (
                  <Link href={link2.href} key={link2.label}>
                    <button className="btn btn-sm btn-neutral hover:bg-accent hover:btn-accent btn-block">
                      {link2.label}
                    </button>
                  </Link>
                );
              })}
            </Details>
          );
        })}
      </div>
    </Details>
  );
};

export default MobileNav;
