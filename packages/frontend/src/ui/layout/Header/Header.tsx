import dribble from "../../../assets/dribble-logo.png";
import { Text, Group, Avatar } from "@mantine/core"; // Import Group and Avatar
import styles from "./Header.module.css";

const Header = () => {
  const user = {
    firstName: "עמית",
    profileImage:
      "https://images.unsplash.com/photo-1612834787644-8b2b4e1f2c6b",
  };

  return (
    <header className={styles.topBar}>
      <div className={styles.headerContent}>
        <Group>
          <Avatar src={user.profileImage} radius="xl" />
          <Text className={styles.helloMessage}> {user.firstName} </Text>
        </Group>
        <img src={dribble} alt="Logo" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
