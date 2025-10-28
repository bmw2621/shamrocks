import Nametape from "@/components/Nametape";
import { getFallen } from "@/services/backend";
import { urlFor } from "@/utils/sanity";
import Image from "next/image";

/**
 *
 *  Component
 *
 */
const GBNFPage = async () => {
  const fallen = await getFallen();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="font-bold w-full text-center mb-3">
        Gone But <span className="text-secondary">Not</span> Forgotten
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {fallen.map((o, i) => {
          const isAltRow = i % 2 === 0;
          return (
            <div
              key={o.roadName}
              className={`gap-3 p-5 flex justify-center  ${isAltRow ? "bg-base-300 " : ""}`}
            >
              <div className="flex flex-col justify-center items-center gap-3 w-full max-w-[300px]">
                <Image
                  src={
                    o.image
                      ? urlFor(o.image).width(200).height(300).url()
                      : "/cvma_logo.png"
                  }
                  width={200}
                  height={300}
                  alt={o.roadName}
                />
                <Nametape className="w-full">{o.roadName}</Nametape>
              </div>
            </div>
          );
        })}
      </div>
      <Nametape className="mt-10 max-w-sm mx-auto text-5xl">CVFFCV</Nametape>
    </main>
  );
};

export default GBNFPage;
