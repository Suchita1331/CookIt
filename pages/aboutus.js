import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/aboutus.module.css";
const aboutus = () => {
  const { user } = useUser();
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
                <Link href="/" className="nav-link">
                  <a>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contactus" className="nav-link">
                  <a>
                    Contact Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/recipe" className="nav-link">
                  <a>
                    Recipe
                  </a>
                </Link>
              </li>
              <li>
                {user && (
                 <Link href="/api/auth/logout" className="nav-link">
                    <a>
                      Logout{" "}
                    </a>
                 </Link>
                )}{" "}
                {!user && (
                  <Link href="/api/auth/login" className="nav-link">
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
      <div className="title">
        <div className={styles.body}>
          <section>
            <div classname={styles.image}>
              <Image src="https://pngimg.com/uploads/chef/chef_PNG117.png" />
            </div>
            <div classname={styles.content}>
              <h2> About Us </h2> <span> </span>
              <p>
                Cook It - A Recipe Diary is intended to be used for day to day
                purpose.This website is intended to have an intuitive and simple
                user interface that allows the user to find and view different
                food recipes based on input provided by the users.
              </p>
              <ul classname={styles.links}>
                <li>
                  <Link href="/members">
                    <a> Members </a>
                  </Link>
                </li>
                <div className="vertical-line"> </div>
                <li>
                  <Link href="/contactus">
                    <a> Contact </a>
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

export default aboutus;
