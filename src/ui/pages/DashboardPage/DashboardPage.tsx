import { Card, Container, Title, Text, ActionIcon } from "@mantine/core";
import { IconBallFootball } from "@tabler/icons-react";
import styles from "./DashboardPage.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

const Dashboard = () => {
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
    <>
      <Header />
      <div className={styles.container}>
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
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
