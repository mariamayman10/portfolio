import styles from "./about.module.css";
import profile from "../assets/profile.jpeg";

function Profile() {
  return (
    <div className={styles.profileWrapper}>
      <img src={profile} alt="profile" />
    </div>
  );
}

export default Profile;
