import { Box, Title, Text } from "@mantine/core";
import styles from "./AuthPage.module.css"; // Import CSS module
import dribblerImage from "../../../assets/auth-page/dribbler1.jpeg";

const AuthPage = () => {
  return (
    <Box className={styles.pageContainer}>
      <Box
        className={styles.leftSection}
        style={{ backgroundImage: `url(${dribblerImage})` }}
      />
      <Box className={styles.rightSection}>
        <Box className={styles.contentBox}>
          <Box className={styles.logoPlaceholder} />
          <Title order={2} className={styles.slogan}>
            דריבל
          </Title>
          <Text size="lg" style={{ marginTop: 10 }}>
            ככה בונים חומה
          </Text>
          <Box className={styles.fbButton}>Login with Facebook</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;
