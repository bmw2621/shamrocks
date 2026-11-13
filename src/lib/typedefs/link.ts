export type ShamrockLink = ShamrockLinkParent | ShamrockLinkChild;
export type ShamrockLinkChild = {
  label: string;
  href: string;
  target?:string;
};
export type ShamrockLinkParent = {
  label: string;
  children: ShamrockLinkChild[];
};
