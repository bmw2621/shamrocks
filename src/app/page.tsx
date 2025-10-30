import Shamrock from "@/components/Shamrock";
import Skully from "@/lib/3d/scenes/Skully";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="w-screen
        h-96
        bg-cover
        bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,1)_40%,rgba(0,0,0,0)),url(/landing.png)]
        bg-center
        shadow-2xl
        shadow-accent/50 z-10
        "
      >
        <div className="h-full max-w-4xl mx-auto flex justify-center md:justify-start">
          <div className="aspect-square h-full">
            <Skully />
          </div>
        </div>
      </div>
      <main className="flex-col w-full max-w-4xl mx-auto mt-5">
        <div className="bg-neutral-50 w-full text-black py-5 px-10 flex flex-col items-center">
          <div className="w-full max-w-sm flex justify-between items-center mb-5">
            <Image src="/cvma_logo.png" width={40} height={40} alt="" />
            <h2 className="text-3xl font-black">Mission</h2>
            <Shamrock className="w-10" />
          </div>
          <p className="text-xl italic font-semibold text-center">
            We are an Association of Combat Veterans from all branches of the
            United States Armed Forces who ride motorcycles as a hobby. Our
            mission now is to support and defend those who have defended our
            country and our freedoms. Our focus is to help veteran care
            facilities provide a warm meal, clothing, shelter, and guidance, or
            simply to say &quot;Thank You.&quot; and &quot;Welcome Home.&quot;
          </p>
        </div>
      </main>
    </>
  );
}
