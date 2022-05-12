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

          <div className={styles.section}>
            <div className={styles.navbar}>
              <nav>
                <div class="logo">
                  <img src="/logo1.png" />
                </div>
                <ul>
                  <li>
                    <a href="/" class="nav-link">
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
                    {user && (
                      <img src={user.picture} className={styles.userImage} />
                    )}
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className={styles.bgimage}>
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
        </div>

        <section id="about">
          <div className={styles.title}>
            <h1>Gallery</h1>
          </div>

          <div className={styles.gallery}>
            <div>
               <a href="https://www.youtube.com/watch?v=AhoZ2TbLxzU" target="popup">
              <img src="../../images/q.jpg" />
              </a>
            </div>

            <div>
              <a href="https://www.youtube.com/watch?v=u3J5__4I9sQ" target="popup">
              <img src="../../images/bmc.jpeg" />
              </a>
            </div>

            <div>
              <a href="https://www.youtube.com/watch?v=iKFxcxjKYPU" target="popup">
              <img src="../../images/ccb.jpg" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=EA4yMzlHo9U" target="popup">
              <img src="../../images/cm.jpg" />
              </a>
            </div>

            <div>
              <a href="https://www.youtube.com/watch?v=yy3R1Pe0jcc" target="popup">
              <img src="../../images/cheesecake.jpg" />
              </a>
            </div>

            <div>
              <a href="https://www.youtube.com/watch?v=f_dT7ZbKnzk" target="popup">
              <img src="../../images/lbp.jpg" />
              </a>
            </div>

            <div>
              <a href="https://www.youtube.com/watch?v=_q5GKCNZcHI" target="popup">
              <img src="../../images/burger.jpg" />
              </a>
            </div>

            <div>
              <a href="https://www.youtube.com/watch?v=fCdafpE7Bpw" target="popup">
              <img src="../../images/momos.jpg" />
              </a>
            </div>

            <div>
              <a href="https://www.youtube.com/watch?v=XsipAaImDVc" target="popup">
              <img src="../../images/pasta.jpg" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=dfNugDnzhxI" target="popup">
              <img src="../../images/pc.jpg" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=aQHr9Zsnzbw" target="popup">
              <img src="../../images/noodles.jpg" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=wSeVF0YWLV4" target="popup">
              <img src="../../images/pt.jpg" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=Isn45rbkdpA" target="popup">
              <img src="../../images/sbpie.jpg" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=pvSL_VsLb4w" target="popup">
              <img src="../../images/tacos.jpg" />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/watch?v=h8b3rBxg9zA" target="popup">
              <img src="../../images/tiramisu.jpg" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
