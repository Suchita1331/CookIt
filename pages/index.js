import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/home.module.css";

import Image from "next/image";
export default function Home() {
  const { user, error, loading } = useUser();
  return (
    <>
      {/* <Image src="/images/BG2.jpg" layout="fill" className={styles.image} /> */}
      {/* {user && (
        <div className={styles.nav}>
          <a href="/api/auth/logout">Logout</a>
          <div>{user.email}</div>
          <div>{user.name}</div>
          <img src={user.picture} className={styles.userImage} />
        </div>
      )}
      {!user && (
        <div>
          <a href="/api/auth/login">Login</a>
        </div>
      )} */}
      <main>
        <div>
          {/* <div className={styles.slide}></div> */}

          <div class="section">
            <div className={styles.navbar}>
              <nav>
                <div class="logo">
                  <img src="/logo.png" />
                </div>
                <ul>
                  <li>
                    <a href="/home" class="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/aboutus" class="nav-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contactus" class="nav-link">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/recipe" class="nav-link">
                      Recipe
                    </a>
                  </li>
                  <li>
                    {user && (
                      <a href="/api/auth/logout" class="nav-link">
                        Logout
                      </a>
                    )}
                    {!user && (
                      <a href="/api/auth/login" class="nav-link">
                        Login
                      </a>
                    )}
                  </li>
                  {/* <li>
                  <a href="/signup" class="nav-link">
                    Sign Up
                  </a>
                </li> */}
                  <li>
                    {user && (
                      <img src={user.picture} className={styles.userImage} />
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="title">
          <div className={styles.head}>
            <h1>
              <span>C</span>ook <span>I</span>t - A <span>R</span>ecipe{" "}
              <span>D</span>iary!!
            </h1>
            <p>
              "<span>Eating</span> is necessity but <span>Cooking</span> is an
              Art."
            </p>
          </div>
        </div>

        {/* <section id="about">
          <div class="title-text">
            <div className={styles.titletext}
              <h2>ABOUT</h2>
            </div>
          </div>
        </section> */}

        <section id="about">
          <div class="title-text">
            <div className={styles.titletext}>
              <h2>Gallery</h2>
            </div>
          </div>


          <div className={styles.gallery}>
            <div>
              <img src="../../images/BG4.jpg" />
            </div>

            <div>
              <img src="../../images/BG1.jpg" />
            </div>

            <div>
              <img src="../../images/BG2.jpg" />
            </div>
          </div>

          <div className={styles.gallery1}>
            <div>
              <img src="../../images/BG4.jpg" />
            </div>

            <div>
              <img src="../../images/BG1.jpg" />
            </div>

            <div>
              <img src="../../images/BG2.jpg" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
