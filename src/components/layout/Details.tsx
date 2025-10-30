"use client";
import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ToggleEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = HTMLAttributes<HTMLDetailsElement> & {
  open?: boolean;
};
const Details: FC<PropsWithChildren<Props>> = ({
  children,
  open: controlledOpen = false,
  onToggle,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(controlledOpen);
  const el = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (el?.current) {
      const closeDetails = () => {
        el!.current!.open = false;
        setIsOpen(false);
      };
      document.addEventListener("click", closeDetails);
      return () => document.removeEventListener("click", closeDetails);
    }
  }, []);

  useEffect(() => {
    setIsOpen(controlledOpen);
  }, [controlledOpen]);

  const handleToggle = (event: ToggleEvent<HTMLDetailsElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    console.log(event.target.open);
    // Prevent onToggle from firing on initial mount if open is true
    if (el.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setIsOpen(event.target.open); // Update internal state based on browser's action
      onToggle?.(event); // Propagate the event if a handler is provided
    }
  };
  return (
    <details ref={el} {...props} open={isOpen} onToggle={handleToggle}>
      {children}
    </details>
  );
};

export default Details;
