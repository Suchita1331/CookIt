import link from "next/link";
import styles from "../styles/contactus.module.css";
const contactus = () => {
  return (
    <main>
      <div class="section">
        <div className={styles.navbar}>
          <nav>
            <div class="logo">
              <img src="/logo.png" />
            </div>
            <ul>
              <li>
                <a href="/home" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/aboutus" className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default contactus;
