import { Box, Title, Text } from "@mantine/core";
import styles from "./AuthPage.module.css"; // Import CSS module
import DribblerLogo from "../../../assets/dribble-logo.png";

const AuthPage = () => {
  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.imageSection} />
      <Box className={styles.authSection}>
        <Box className={styles.contentBox}>
          <img
            src={DribblerLogo}
            alt="Logo"
            className={styles.logoPlaceholder}
          />
          <Title order={2} className={styles.slogan}>
            דריבל
          </Title>
          <Text size="lg" mt={10}>
            המנג׳ר שלך בכדורגל
          </Text>
          <Box className={styles.fbButton}>Login with Facebook</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthPage;
