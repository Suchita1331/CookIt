import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/aboutus.module.css";
const aboutus = () => {
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
                <Link href="/contactus">
                  <a>
                    Contact Us
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
                      Logout{" "}
                    </a>
                 </Link>
                )}{" "}
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
              <Image src="https://pngimg.com/uploads/chef/chef_PNG117.png" alt="chef" />
            </div>
            <div className={styles.content}>
              <h2> About Us </h2> <span> </span>
              <p>
                Cook It - A Recipe Diary is intended to be used for day to day
                purpose.This website is intended to have an intuitive and simple
                user interface that allows the user to find and view different
                food recipes based on input provided by the users.
              </p>
              <ul className={styles.links}>
                <li>
                  <Link href="/members">
                    <a> Members </a>
                  </Link>
                </li>
                <div className={styles.vertical-line}> </div>
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
