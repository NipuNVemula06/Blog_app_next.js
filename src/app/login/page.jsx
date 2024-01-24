"use client";

import React from "react";
import "./LoginPage.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="login_loading">loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_socialbutton" onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className="login_socialbutton">Sign in with Github</div>
        <div className="login_socialbutton">Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
