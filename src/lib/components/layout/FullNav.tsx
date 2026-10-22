import {
  ShamrockLink,
  ShamrockLinkChild,
  ShamrockLinkParent,
} from "@/app/typedefs/link";
import Link from "next/link";
import { FC } from "react";
import { FaChevronDown } from "react-icons/fa";
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
const FullNav: FC<Props> = async ({ links }) => {
  links.forEach(console.log)
  return (
    <div className="gap-1 hidden md:flex z-50">
      {links.map((link: ShamrockLink) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (link.href) {
          const { href, label, target } = link as ShamrockLinkChild;
          return (
            <Link href={href} key={label} target={target} rel={target && "noopener noreferrer"}>
              <button className="btn btn-sm hover:btn-primary">{label}</button>
            </Link>
          );
        }
        const { label, children: childLinks } = link as ShamrockLinkParent;
        return (
          <Details key={label}>
            <summary className="btn btn-sm hover:btn-primary">
              {link.label}
              <FaChevronDown />
            </summary>
            <div className="absolute flex flex-col">
              {childLinks.map((link2) => (
                <Link href={link2.href} key={link2.label} target={link2.target}  rel={link2.target && "noopener noreferrer"}>
                  <button className="btn btn-sm btn-neutral hover:btn-accent btn-block z-50">
                    {link2.label}
                  </button>
                </Link>
              ))}
            </div>
          </Details>
        );
      })}
    </div>
  );
};

export default FullNav;
