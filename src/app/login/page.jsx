"use client";

import React, { useEffect } from "react";
import "./LoginPage.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  console.log(status);

  useEffect(() => {
    console.log("Status:", status);
    if (status === "authenticated") {
      console.log("Redirecting to homepage");
      router.push("/");
    }
  }, [status, router]);

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
