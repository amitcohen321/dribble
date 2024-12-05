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
  IconUserPlus,
} from "@tabler/icons-react";
import styles from "./GamePage.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard";

const GamePage = ({ role = "admin", onAddPlayer, onShuffleTeams }) => {
  const game = {
    name: "משחק 1",
    date: "2021-06-01",
    time: "19:00",
    location: "וינטר, רמת-גן",
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
    {
      firstName: "עמית",
      lastName: "כהן",
      phoneNumber: "054-1234567",
      participationStatus: "ספסל",
    },
    {
      firstName: "תום",
      lastName: "דיקורי",
      phoneNumber: "054-1234567",
      participationStatus: "ספסל",
    },
    {
      firstName: "אייל",
      lastName: "אלימלך",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
    {
      firstName: "אבשלום",
      lastName: "נתן",
      phoneNumber: "054-1234567",
      participationStatus: "מגרש",
    },
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
              <Text> {game.date}</Text>
              <Text> {game.time}</Text>
              <Text> {game.location}</Text>
            </Box>
            {role === "admin" && (
              <ActionIcon
                className={styles.shareButton}
                size={60}
                radius="xl"
                variant="light"
                color="violet"
              >
                <IconShare />
              </ActionIcon>
            )}
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
            שחקנים (
            {
              players.filter((p) => p.participationStatus === "participate")
                .length
            }
            {players.length})
          </Title>

          <Button
            className={styles.actionButtonAddPlayer}
            onClick={onAddPlayer}
            variant="filled"
            color="violet"
          >
            {role === "admin" ? (
              <Text style={{ marginLeft: "10px" }}> הוסף שחקן</Text>
            ) : (
              <Text style={{ marginLeft: "10px" }}> הירשם למשחק</Text>
            )}
            <IconUserPlus />
          </Button>

          <Container
            fluid
            className={styles.playersList}
            style={{ padding: "10px" }}
          >
            {players.map((player, index) => (
              <PlayerCard
                key={index}
                firstName={player.firstName}
                lastName={player.lastName}
                phoneNumber={player.phoneNumber}
                participationStatus={player.participationStatus}
              />
            ))}
          </Container>
        </section>

        <section className={styles.teamsSection}>
          <Title style={{ textAlign: "right" }} order={3}>
            קבוצות
          </Title>
          {role === "admin" && (
            <Button
              className={styles.shuffleButton}
              color="violet"
              onClick={onShuffleTeams}
            >
              <Text style={{ marginLeft: "8px" }}>צור כוחות הוגנים</Text>
              <IconArrowsShuffle />
            </Button>
          )}

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
