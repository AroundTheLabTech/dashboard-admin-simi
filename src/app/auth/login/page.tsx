import LoginForm from "./LoginForm";
import styles from "@/styles/Login.module.css";



const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.col8}>
          <h2 >Simi Dashboard</h2>
          <h3>Administrador</h3>

        </div>

        <div className={styles.col4}>
          <h2 className={styles.blackText}>Hola!</h2>
          <h3 className={styles.blackText}>Bienvenido de Vuelta</h3>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
