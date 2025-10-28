import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type ChapterMember = {
  firstName?: string;
  lastName?: string;
  roadName: string;
  email?: string;
  image?: SanityImageSource;
};

export type ChapterPosition =
  | "commander"
  | "xo"
  | "sec"
  | "treasurer"
  | "saa"
  | "pro"
  | "rc"
  | "qm"
  | "chaplain"
  | "webmaster";

export type ChapterOfficer = {
  position: ChapterPosition;
  roadName: ChapterMember;
};
