"use client";

import { signInWithBand } from "@/lib/auth/loginAction";
import { FC, useActionState } from "react";
import { div } from "three/tsl";

const initialState = {
  error: null,
};

const LoginButton: FC<{ className: string }> = ({ className }) => {
  const [state, formAction, isPending] = useActionState(
    signInWithBand,
    initialState,
  );
  return (
    <>
      <form action={formAction}>
        <button
          disabled={isPending}
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
          <img src="band.svg" className="w-8" /> Login
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
