"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className={styles.container}>
      <button onClick={() => signIn("github")}>
        Login with Github Account
      </button>
    </div>
  );
};

export default Login;
