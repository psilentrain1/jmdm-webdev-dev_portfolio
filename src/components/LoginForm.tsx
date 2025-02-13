"use client";
import { useActionState } from "react";
import { authenticate } from "@/app/utilities/actions";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/office";
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction}>
      <div>
        <h1>Please log in to continue.</h1>
        <div>
          <div>
            <label htmlFor="username">Username</label>
            <div>
              <input type="text" name="username" id="username" placeholder="Enter your username" required />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input type="password" name="password" id="password" placeholder="Enter password" required minLength={6} />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button type="submit">Log in</button>
        <div>
          {errorMessage && (
            <>
              <p>{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
