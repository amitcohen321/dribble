import {
  Avatar,
  Group,
  Card,
  Container,
  Title,
  Text,
  ActionIcon,
} from "@mantine/core";
import { IconBallFootball } from "@tabler/icons-react";
import styles from "./DashboardPage.module.css";

const Dashboard = () =>
  // {
  //   // user,
  //   //  games
  // }
  {
    const user = {
      firstName: "עמית",
      profileImage:
        "https://images.unsplash.com/photo-1612834787644-8b2b4e1f2c6b",
    };
    const games = [
      {
        title: "משחק 1",
        description: "מגרש 1",
      },
      {
        title: "משחק 2",
        description: "מגרש 2",
      },
      {
        title: "משחק 3",
        description: "מגרש 3",
      },
    ];

    return (
      <div className={styles.container}>
        <header className={styles.topBar}>
          <div className={styles.headerContent}>
            <Group>
              <Avatar src={user.profileImage} radius="xl" />
              <Text className={styles.helloMessage}>{user.firstName}</Text>
            </Group>
            <img src="logo.png" alt="Logo" className={styles.logo} />
          </div>
        </header>

        <Container
          fluid
          className={styles.dashboard}
          style={{ margin: "10px" }}
        >
          {games.map((game, index) => (
            <Card key={index} shadow="sm" className={styles.gameBox}>
              <Title order={4}>{game.title}</Title>
              <Text size="sm" color="dimmed">
                {game.description}
              </Text>
            </Card>
          ))}
          <ActionIcon
            radius="xl"
            size={60}
            className={styles.addGameButton}
            style={{
              position: "fixed",
              left: "30px",
              bottom: "90px",
            }}
            // onClick={onAddGame}
            variant="filled"
            color="violet"
          >
            <IconBallFootball size={30} />
          </ActionIcon>
        </Container>

        <footer className={styles.footer}>
          Built with <span className={styles.heart}>❤️</span> to make your life
          easier
        </footer>
      </div>
    );
  };

export default Dashboard;
