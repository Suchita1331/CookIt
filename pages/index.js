import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/home.module.css";

import Image from "next/image";
import Link from 'next/link';
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
                        About Us
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
              <Link href="https://www.youtube.com/watch?v=AhoZ2TbLxzU" target="popup">
                <a>
                  <Image src="../../images/q.jpg" alt="q" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=u3J5__4I9sQ" target="popup">
                <a>
                  <Image src="../../images/bmc.jpeg" alt="bmc />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=iKFxcxjKYPU" target="popup">
                <a>
                  <Image src="../../images/ccb.jpg" alt="ccb" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=EA4yMzlHo9U" target="popup">
                <a>
                  <Image src="../../images/cm.jpg" alt="cm" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=yy3R1Pe0jcc" target="popup">
                <a>
                  <Image src="../../images/cheesecake.jpg" alt="cheesecake" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=f_dT7ZbKnzk" target="popup">
                <a>
                  <Image src="../../images/lbp.jpg" alt="lbp" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=_q5GKCNZcHI" target="popup">
                <a>
                  <Image src="../../images/burger.jpg" alt="burger" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=fCdafpE7Bpw" target="popup">
                <a>
                  <Image src="../../images/momos.jpg" alt="momos" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=XsipAaImDVc" target="popup">
                <a>
                  <Image src="../../images/pasta.jpg" alt="pasta" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=dfNugDnzhxI" target="popup">
                <a>
                  <Image src="../../images/pc.jpg" alt="pc" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=aQHr9Zsnzbw" target="popup">
                <a>
                  <Image src="../../images/noodles.jpg" alt="noodles" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=wSeVF0YWLV4" target="popup">
                <a>
                  <Image src="../../images/pt.jpg" alt="pt" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=Isn45rbkdpA" target="popup">
                <a>
                  <Image src="../../images/sbpie.jpg" alt="sbpie" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=pvSL_VsLb4w" target="popup">
                <a>
                  <Image src="../../images/tacos.jpg" alt="tacos" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=h8b3rBxg9zA" target="popup">
                <a>
                  <Image src="../../images/tiramisu.jpg" alt="tiramisu" />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
