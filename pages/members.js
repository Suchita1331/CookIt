import { useUser } from "@auth0/nextjs-auth0";
import link from "next/link";
import styles from "../styles/members.module.css";
const members = () => {
  const { user } = useUser();
  return (
    <main>
      <div class="section">
        <div className={styles.navbar}>
          <nav>
            <div class="logo">
              <img src="/logo1.png" />
            </div>
            <ul>
              <li>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/contactus" className="nav-link">
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
            </ul>
          </nav>
        </div>
      </div>
      <div class="title">
        <div className={styles.body}>
          <section>
            <div classname={styles.image}>
              <img src="https://pngimg.com/uploads/chef/chef_PNG132.png" />
            </div>
            <div>
              <h2> Members </h2>
              <span></span>
              <div>
                <img src=".." />
                <h3>Ms. Suchita Mishra</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B38</p>
              </div>
              <div>
                <img src="../images/Sonu.jpg" />
                <h3>Ms. Shubhangi Chaudhary</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B34</p>
              </div>
              <div>
                <img src="#" />
                <h3>Mr. Pushpak Fasate</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B58</p>
              </div>
              <div>
                <img src="#" />
                <h3>Mr. Sushant Choudhari</h3>
                <p>Dept - Computer Science And Engineering</p>
                <p>Roll No. CS19B65</p>
              </div>
              <ul className={styles.links}>
                <li>
                  <a href="/aboutus"> About us </a>
                </li>
                <li>
                  <a href="/contactus"> Contact us </a>
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
