import { FC, PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Nametape: FC<PropsWithChildren<Props>> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-black
        border-8
        border-accent
        rounded-2xl
        text-accent
        text-center
        text-3xl
        font-bold
        px-7
        py-2
        h-24
        flex
        flex-col
        justify-center
        items-center
         ${className}`}
    >
      {children}
    </div>
  );
};

export default Nametape;
