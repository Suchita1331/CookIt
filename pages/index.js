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
                    <Link href="/aboutus" className="nav-link">    
                      <a>
                        About Us
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
                          Logout
                        </a>
                      </Link>
                    )}
                    {!user && (
                      <Link href="/api/auth/login" className="nav-link">
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
                  <Image src="../../images/q.jpg" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=u3J5__4I9sQ" target="popup">
                <a>
                  <Image src="../../images/bmc.jpeg" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=iKFxcxjKYPU" target="popup">
                <a>
                  <Image src="../../images/ccb.jpg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=EA4yMzlHo9U" target="popup">
                <a>
                  <Image src="../../images/cm.jpg" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=yy3R1Pe0jcc" target="popup">
                <a>
                  <Image src="../../images/cheesecake.jpg" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=f_dT7ZbKnzk" target="popup">
                <a>
                  <Image src="../../images/lbp.jpg" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=_q5GKCNZcHI" target="popup">
                <a>
                  <Image src="../../images/burger.jpg" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=fCdafpE7Bpw" target="popup">
                <a>
                  <Image src="../../images/momos.jpg" />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://www.youtube.com/watch?v=XsipAaImDVc" target="popup">
                <a>
                  <Image src="../../images/pasta.jpg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=dfNugDnzhxI" target="popup">
                <a>
                  <Image src="../../images/pc.jpg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=aQHr9Zsnzbw" target="popup">
                <a>
                  <Image src="../../images/noodles.jpg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=wSeVF0YWLV4" target="popup">
                <a>
                  <Image src="../../images/pt.jpg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=Isn45rbkdpA" target="popup">
                <a>
                  <Image src="../../images/sbpie.jpg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=pvSL_VsLb4w" target="popup">
                <a>
                  <Image src="../../images/tacos.jpg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=h8b3rBxg9zA" target="popup">
                <a>
                  <Image src="../../images/tiramisu.jpg" />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
