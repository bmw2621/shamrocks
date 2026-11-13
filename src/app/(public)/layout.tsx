import { FaFacebookF } from "react-icons/fa6";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      {children}
      <footer className="flex gap-5 w-full justify-center my-10">
        <a
          href="https://www.facebook.com/cvma.ga.25.2"
          className="shadow-white/50 shadow-lg p-3 rounded flex gap-3 items-center"
        >
          <FaFacebookF size={32} />
          Chapter
        </a>
        <a
          href="https://www.facebook.com/groups/1606765936220556/"
          className="shadow-white/50 shadow-lg p-3 rounded flex gap-3 items-center"
        >
          <FaFacebookF size={32} />
          Auxiliary
        </a>
      </footer>
    </>
  );
}
