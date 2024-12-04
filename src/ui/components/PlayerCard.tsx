import { IconPhoneCall } from "@tabler/icons-react";
import { Avatar, Group, Text } from "@mantine/core";
import classes from "./PlayerCard.module.css";

export function PlayerCard({
  firstName,
  lastName,
  phoneNumber,
  participationStatus,
}) {
  return (
    <div>
      <Group wrap="nowrap" className={classes.groupStyle}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={60}
          radius="xl"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {participationStatus}
          </Text>

          <Text fz="xs" fw={500} className={classes.name}>
            {firstName} {lastName}
          </Text>

          <Group wrap="nowrap" gap={5} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phoneNumber}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}

{
  /* <Card
key={index}
className={`
  ${styles.playerCard} 
  ${styles[player.pariticpationStatus]} 
  ${role === "admin" ? styles.clickcursor : ""}
`}
>
<Text>{player.name}</Text>
<Text>{player.status}</Text>
</Card>
))} */
}
