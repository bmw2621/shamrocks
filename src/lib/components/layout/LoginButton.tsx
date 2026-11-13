"use client";

import { signInWithBand } from "@/lib/auth/loginAction";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useActionState, useEffect, useState } from "react";
import { GiCartwheel } from "react-icons/gi";

const initialState = {
  error: null,
};

const LoginButton: FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    signInWithBand,
    initialState,
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  const supabase = createClient();

  useEffect(() => {
    setTimeout(() => setIsLoggedIn(false), 2000);
    return;
    supabase.auth.getUser().then(({ data: { user }, error }) => {
      setIsLoggedIn(!error && Boolean(user));
    });
  });
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) router.push("/");
  };

  return isLoggedIn ? (
    <button
      className={`btn
          btn-sm
          btn-primary
          hover:btn-accent
          btn-block
          relative
          ${className}
          `}
      onClick={handleLogout}
    >
      Logout
    </button>
  ) : (
    <>
      <form action={formAction}>
        <button
          disabled={isPending || isLoggedIn === undefined}
          type="submit"
          className={`btn
          btn-sm
          btn-primary
          hover:btn-accent
          btn-block
          relative
          ${className}
          `}
        >
          {isLoggedIn === undefined ? (
            <GiCartwheel size={32} className="animate-spin" />
          ) : (
            <>
              <Image src="/band.svg" width={24} height={24} alt="" />
              Login
            </>
          )}{" "}
        </button>
      </form>
      {state.error && (
        <div className="toast toast-end">
          <div className="alert alert-error">
            <span>{state.error}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginButton;
