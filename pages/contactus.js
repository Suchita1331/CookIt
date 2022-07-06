import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/contact.module.css";

const contactus = () => {
  return (
    <main>
      <div>
        <div className={styles.navbar}>
          <nav>
            <div>
              <Image src="/logo1.png" alt="logo" />
            </div>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/aboutus">
                  <a>
                    About us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/recipe">
                  <a>
                    Recipe
                  </a>
                </Link>
              </li>
              <li>
                {user && (
                  <Link href="/api/auth/logout">
                    <a>
                      Logout
                    </a>
                 </Link>
                )}
                {!user && (
                  <Link href="/api/auth/login">
                    <a>
                      Login
                    </a>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <div className={styles.body}>
          <section>
            <div className={styles.image}>
              <Image src="https://pngimg.com/uploads/chef/chef_PNG61.png" alt="chef" />
            </div>
            <div>
              <h2> Contact Us </h2>
              <span></span>
              <div>
                <h3>
                  S.B.Jain Institute Of Technology, Management & Research.
                </h3>
                <p>Kalmeshwar, Nagpur MH, IN</p>
              </div>
              <div>
                <h3>+91 1234567890</h3>
                <p>Monday to Saturday, 10AM to 6PM</p>
              </div>
              <div>
                <h3>cookit@gmail.com</h3>
                <p>Email us your query</p>
              </div>
              <ul className={styles.links}>
                <li>
                  <Link href="/aboutus">
                    <a> About us </a>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default contactus;
