import Nametape from "@/lib/components/Nametape";
import { getOfficers } from "@/services/backend";
import { getPositionLabel, urlFor } from "@/utils/sanity";
import Image from "next/image";

/**
 *
 *  Component
 *
 */
const OfficersPage = async () => {
  const officers = await getOfficers();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="font-bold w-full text-center mb-3">Meet Our Officers</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-4 gap-x-0">
        {officers.map((o, i) => {
          const isAltRowLg = Math.floor(i / 2) % 2 === 0;
          const isAltRowSm = i % 2 === 0;
          return (
            <div
              key={o.position}
              className={`gap-3 p-5 flex justify-center ${isAltRowLg ? "sm:bg-base-300" : ""} ${isAltRowSm ? "bg-base-300 sm:bg-base-100" : ""}`}
            >
              <div className="flex flex-col justify-center items-center gap-3 w-full max-w-[300px]">
                <Nametape className="w-full">
                  <div>Chapter</div>
                  <div className="whitespace-nowrap">{`${getPositionLabel(o.position)}`}</div>
                </Nametape>
                <Image
                  src={
                    o?.roadName?.image
                      ? urlFor(o.roadName.image).width(200).height(300).url()
                      : "/cvma_logo.png"
                  }
                  width={200}
                  height={300}
                  alt={o?.roadName?.roadName || "no image"}
                />
                <Nametape className="w-full">
                  {o?.roadName?.roadName || "-"}
                </Nametape>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default OfficersPage;
