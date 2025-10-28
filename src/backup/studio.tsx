/**
 * This should be renamed to 'app/studio/[[...tool]]/page.tsx to have a path for studio
 *
 * This is archived because a static build cannot happen with dynamic routes
 */

import { NextStudio } from "next-sanity/studio";
import { redirect } from "next/navigation";
import config from "../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (process.env.NODE_ENV === "production") return redirect("/");
  return <NextStudio config={config} />;
}
