import link from "next/link";
import styles from "../styles/aboutus.module.css";
const aboutus = () => {
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
                <a href="/index" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/contactus" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default aboutus;
