"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  const { data: session } = useSession();
  console.log(session);
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("github")}>
        Login with Github Account
      </button>
    </div>
  );
};

export default Login;
