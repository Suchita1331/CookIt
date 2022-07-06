import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/members.module.css";
const members = () => {
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
              <Image src="https://pngimg.com/uploads/chef/chef_PNG132.png" alt="chef" />
            </div>
            <div>
              <h2> Members </h2>
              <span></span>
              <div>
                <Image src="../images/Suchita.jpg" alt="suchita" />
                <h3>Ms. Suchita Mishra</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B38</p>
              </div>
              <div>
                <Image src="../images/Sonu.jpg" alt="sonu" />
                <h3>Ms. Shubhangi Chaudhary</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B34</p>
              </div>
              <div>
                <Image src="../images/Pushpak.jpg" alt="pushpak" />
                <h3>Mr. Pushpak Fasate</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B58</p>
              </div>
              <div>
                <Image src="../images/Suchita.jpg" alt="sushant" />
                <h3>Mr. Sushant Choudhari</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B65</p>
              </div>
              <ul className={styles.links}>
                <li>
                  <Link href="/aboutus">
                    <a> About us </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contactus">
                    <a> Contact us </a>
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

export default members;
