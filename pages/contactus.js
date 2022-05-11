import link from "next/link";


import { userUser, useUser } from "@auth0/nextjs-auth0"
import styles from "../styles/contactus.module.css";
const contactus = () => {
  const { user, error, loading } = useUser();
  return (
    <main className="{style.bgimg}">
      <div >
        {/* <div className={styles.slide}></div> */}

        <div className={styles.bgimg}>
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
          <div className={styles.outter}>
            <div className={styles.forms}>
              <input type="text" name="name"  placeholder="Enter Your Name" required></input>

            </div>
            <div className={styles.forms}>
              <input type="text" name="name"  placeholder="Enter Email Address" required></input>

            </div>
            <div className={styles.forms}>
              <input type="text" name="name"  placeholder="Enter Your subject" required></input>
            </div>
            <textarea  name="message" className="message" placeholder="Message" required></textarea>
            <button type="submit" >Send Message</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default contactus;
