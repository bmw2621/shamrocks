import { ChapterPosition } from "@/app/typedefs/cms";
import { sanityClient } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const imageBuilder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => imageBuilder.image(source);

const positionMap: Record<ChapterPosition, string> = {
  chaplain: "Chaplain",
  commander: "Commander",
  pro: "PRO",
  qm: "Quartermaster",
  rc: "Road Captain",
  sec: "Secretary",
  saa: "Sergeant at Arms",
  treasurer: "Treasurer",
  webmaster: "Webmaster",
  xo: "XO",
};

export const getPositionLabel = (position: ChapterPosition) =>
  positionMap[position];
