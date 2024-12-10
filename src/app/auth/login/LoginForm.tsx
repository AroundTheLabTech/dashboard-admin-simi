"use client";

import { useState } from "react";
import { AuthService } from "@/application/auth/authService";
import styles from "@/styles/Login.module.css";
import { Admin } from "@/domain/auth/admin";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = typeof window !== "undefined" ? useRouter() : null;

  const handleLogin = () => {
    const authService = new AuthService();

    const admin = new Admin(username, password);

    const isValid = authService.login(admin);

    if (isValid) {
      alert("Inicio de sesión exitoso");
      router?.push("/dashboard/analytics");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.formField}>
        <label htmlFor="username" className={styles.formLabel}>Usuario</label>
        <input
          type="text"
          id="username"
          className={styles.formInput}
          placeholder="Introduce tu usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor="password" className={styles.formLabel}>Contraseña</label>
        <input
          type="password"
          id="password"
          className={styles.formInput}
          placeholder="Introduce tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.submitButton} onClick={handleLogin}>Ingresar</button>
    </div>
  );
};

export default LoginForm;
