import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/contact.module.css";

const contactus = () => {
  const { user, error, loading } = useUser();

  return (
    <main>
      <div className="section">
        <div className={styles.navbar}>
          <nav>
            <div className="logo">
              <Image src="/logo1.png" />
            </div>
            <ul>
              <li>
                <Link>
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link>
                  <a href="/aboutus" className="nav-link">
                    About us
                  </a>
                </Link>
              </li>
              <li>
                <Link>
                  <a href="/recipe" className="nav-link">
                    Recipe
                  </a>
                </Link>
              </li>
              <li>
                {user && (
                  <Link>
                    <a href="/api/auth/logout" className="nav-link">
                      Logout
                    </a>
                 </Link>
                )}
                {!user && (
                  <Link>
                    <a href="/api/auth/login" className="nav-link">
                      Login
                    </a>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="title">
        <div className={styles.body}>
          <section>
            <div className={styles.image}>
              <Image src="https://pngimg.com/uploads/chef/chef_PNG61.png" />
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
                  <Link>
                    <a href="/aboutus"> About us </a>
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
