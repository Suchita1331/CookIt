import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/members.module.css";
const members = () => {
  const { user } = useUser();
  return (
    <main>
      <div className="section">
        <div className={styles.navbar}>
          <nav>
            <div class="logo">
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
            </ul>
          </nav>
        </div>
      </div>
      <div className="title">
        <div className={styles.body}>
          <section>
            <div classname={styles.image}>
              <Image src="https://pngimg.com/uploads/chef/chef_PNG132.png" />
            </div>
            <div>
              <h2> Members </h2>
              <span></span>
              <div>
                <Image src=".." />
                <h3>Ms. Suchita Mishra</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B38</p>
              </div>
              <div>
                <Image src="../images/Sonu.jpg" />
                <h3>Ms. Shubhangi Chaudhary</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B34</p>
              </div>
              <div>
                <Image src="#" />
                <h3>Mr. Pushpak Fasate</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B58</p>
              </div>
              <div>
                <Image src="#" />
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
