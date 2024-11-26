import {
  Card,
  Container,
  Title,
  Text,
  Button,
  ActionIcon,
  Grid,
} from "@mantine/core";
import { IconPlus, IconArrowsShuffle, IconShare } from "@tabler/icons-react";
import styles from "./GamePage.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

const GamePage = ({ onAddPlayer, onShuffleTeams }) => {
  const user = {
    firstName: "עמית",
    profileImage:
      "https://images.unsplash.com/photo-1612834787644-8b2b4e1f2c6b",
  };
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
    ],
  };

  const players = [
    { name: "שחקן1", status: "במגרש" },
    { name: "שחקן1", status: "בספסל" },
    { name: "שחקן1", status: "במגרש" },
    { name: "שחקן1", status: "בספסל" },
    { name: "שחקן1", status: "במגרש" },
    { name: "שחקן1", status: "מחליף" },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <ActionIcon
        className={styles.shareButton}
        size={60}
        radius="xl"
        variant="light"
        color="violet"
        style={{
          position: "fixed",
          top: "130px",
          left: "40px",
          bottom: "90px",
        }}
      >
        <IconShare />
      </ActionIcon>
      {/* Game Details Section */}
      <Container fluid className={styles.content}>
        <section className={styles.gameDetails}>
          <Title order={3}>{game.name}</Title>
          <Text>תאריך: {game.date}</Text>
          <Text>מיקום: {game.location}</Text>
          <Button
            component="a"
            href={`https://maps.google.com?q=${encodeURIComponent(
              game.location
            )}`}
            target="_blank"
            variant="light"
            color="violet"
            className={styles.googleMapsButton}
          >
            פתח בגוגל מפות
          </Button>
          <br></br>
          <Button
            variant="filled"
            color="violet"
            onClick={() => alert("Payment link clicked")}
          >
            שלם עכשיו
          </Button>
        </section>

        {/* Player List Section */}
        <section className={styles.playersSection}>
          <Title order={4}>
            שחקנים ({players.filter((p) => p.status === "participate").length}/
            {players.length})
          </Title>
          <Container fluid className={styles.playersList}>
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
              <IconPlus size={30} />
              <Text>Add Player</Text>
            </Card>
          </Container>
        </section>

        {/* Teams Section */}
        <section className={styles.teamsSection}>
          <Title order={4}>קבוצות</Title>
          <Grid columns={12} gutter="lg">
            {game.teams.map((team, index) => (
              <Grid.Col key={index} span={4}>
                <Card className={styles.teamBox}>
                  <Text>Team {index + 1}</Text>
                  {team.players.map((player, idx) => (
                    <Text key={idx}>{player}</Text>
                  ))}
                </Card>
              </Grid.Col>
            ))}
          </Grid>
          <Button
            className={styles.shuffleButton}
            leftIcon={<IconArrowsShuffle />}
            variant="light"
            color="violet"
            onClick={onShuffleTeams}
          >
            Shuffle Teams
          </Button>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default GamePage;
