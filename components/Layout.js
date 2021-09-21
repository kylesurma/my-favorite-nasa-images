import Navbar from "./Nav";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <h1 className={styles.title}>My Favorite NASA Photos</h1>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
