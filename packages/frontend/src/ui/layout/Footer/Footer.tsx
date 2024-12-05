import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Built with <span className={styles.heart}>❤️</span> to make your life easier
    </footer>
  );
};

export default Footer;
