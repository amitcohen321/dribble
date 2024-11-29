import {
  Card,
  Container,
  Title,
  Text,
  Button,
  ActionIcon,
  Grid,
  Box,
} from "@mantine/core";
import {
  IconArrowsShuffle,
  IconShare,
  IconShirtFilled,
  IconGpsFilled,
  IconCreditCard,
  IconPlayFootball,
} from "@tabler/icons-react";
import styles from "./GamePage.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

const GamePage = ({ onAddPlayer, onShuffleTeams }) => {
  const game = {
    name: "משחק 1",
    date: "2021-06-01",
    location: "מגרש 1",
    teams: [
      {
        players: ["שחקן 1", "שחקן 2", "שחקן 3"],
      },
      {
        players: ["שחקן 4", "שחקן 5", "שחקן 6"],
      },
      {
        players: ["שחקן 4", "שחקן 5", "שחקן 6"],
      },
    ],
  };

  const players = [
    { name: "שחקן1", status: "מגרש" },
    { name: "שחקן1", status: "ספסל" },
    { name: "שחקן1", status: "מגרש" },
    { name: "שחקן1", status: "ספסל" },
    { name: "שחקן1", status: "מגרש" },
    { name: "שחקן1", status: "מחליף" },
    { name: "שחקן1", status: "מגרש" },
    { name: "שחקן1", status: "מחליף" },
    { name: "שחקן1", status: "מגרש" },
    { name: "שחקן1", status: "מחליף" },
    { name: "שחקן1", status: "מגרש" },
    { name: "שחקן1", status: "ספסל" },
    { name: "שחקן1", status: "מגרש" },
    { name: "שחקן1", status: "ספסל" },
    { name: "שחקן1", status: "מגרש" },
    { name: "שחקן1", status: "ספסל" },
  ];

  const colorMapping: { [key: number]: string } = {
    1: "white",
    2: "black",
    3: "orange",
  };

  return (
    <div className={styles.container}>
      <Header />
      <Container fluid className={styles.content}>
        <section className={styles.gameDetailsSection}>
          <div className={styles.gameMetaContainer}>
            <Box className={styles.gameDataContainer}>
              <Title order={3}>{game.name}</Title>
              <Text>תאריך: {game.date}</Text>
              <Text>מיקום: {game.location}</Text>
            </Box>
            <ActionIcon
              className={styles.shareButton}
              size={60}
              radius="xl"
              variant="light"
              color="violet"
            >
              {" "}
              <IconShare />{" "}
            </ActionIcon>
          </div>

          <Box className={styles.actionsContainer}>
            <Button
              component="a"
              href={`https://maps.google.com?q=${encodeURIComponent(
                game.location
              )}`}
              target="_blank"
              color="violet"
              className={styles.actionButtonMaps}
            >
              <Text style={{ marginLeft: "15px" }}> ניווט למגרש</Text>
              <IconGpsFilled />
            </Button>

            <Button
              variant="filled"
              color="violet"
              onClick={() => alert("Payment link clicked")}
              className={styles.actionButtonPayment}
            >
              <Text style={{ marginLeft: "45px" }}> תשלום</Text>
              <IconCreditCard />
            </Button>
          </Box>
        </section>

        <section className={styles.playersSection}>
          <Title style={{ textAlign: "right" }} order={3}>
            שחקנים ({players.filter((p) => p.status === "participate").length}
            {players.length})
          </Title>
          <Container
            fluid
            className={styles.playersList}
            style={{ padding: "0px" }}
          >
            {players.map((player, index) => (
              <Card
                key={index}
                className={`${styles.playerCard} ${styles[player.status]}`}
              >
                <Text>{player.name}</Text>
                <Text>{player.status}</Text>
              </Card>
            ))}
            <Card className={styles.addPlayerCard} onClick={onAddPlayer}>
              <Text>הוסף שחקן</Text>
              <IconPlayFootball />
            </Card>
          </Container>
        </section>

        <section className={styles.teamsSection}>
          <Title style={{ textAlign: "right" }} order={3}>
            קבוצות
          </Title>
          <Button
            className={styles.shuffleButton}
            color="violet"
            onClick={onShuffleTeams}
          >
            <Text style={{ marginLeft: "8px" }}>צור כוחות הוגנים</Text>
            <IconArrowsShuffle />
          </Button>
          <Grid columns={12} gutter="lg">
            {game.teams.map((team, index) => (
              <Grid.Col key={index} span={4}>
                <Card className={styles.teamBox}>
                  <Text className={styles.teamTitle}>
                    קבוצה {index + 1}
                    <IconShirtFilled color={colorMapping[index + 1]} />
                  </Text>
                  {team.players.map((player, idx) => (
                    <Text key={idx}>{player}</Text>
                  ))}
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default GamePage;
