import React, { useState } from "react";
import { Container, Title, TextInput, Button } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { IconCircleCheck, IconPlayFootball } from "@tabler/icons-react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import styles from "./CreateGameModal.module.css";
import ModalContainer from "../ModalContainer/ModalContainer";

const CreateGamePage: React.FC = () => {
  const [formData, setFormData] = useState({
    gameName: "",
    date: null as Date | null,
    time: null as Date | null,
    location: "",
    paymentLink: "",
    additionalInfo: "",
  });

  const handleInputChange = (field: string, value: string | Date | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement game creation logic
    console.log("Game creation data:", formData);
  };

  return (
    <ModalContainer opened={true} onClose={() => {}} title="יצירת משחק">
      <Header />
      <Container fluid className={styles.content}>
        <div className={styles.formWrapper}>
          <Title order={2} className={styles.formTitle}>
            <IconPlayFootball /> יצירת משחק
          </Title>
          <form onSubmit={handleSubmit} className={styles.createGameForm}>
            <div className={styles.formGrid}>
              <TextInput
                label="שם המשחק"
                value={formData.gameName}
                onChange={(e) => handleInputChange("gameName", e.target.value)}
                required
                className={styles.formInput}
              />
              <TextInput
                label="מיקום"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                required
                className={styles.formInput}
              />

              <DateInput
                label="תאריך"
                value={formData.date}
                onChange={(value) => handleInputChange("date", value)}
                required
                className={styles.formInput}
              />

              <TimeInput
                label="שעה"
                value={formData.time}
                onChange={(value) => handleInputChange("time", value)}
                required
                className={styles.formInput}
              />

              <TextInput
                label="קישור לתשלום"
                value={formData.paymentLink}
                onChange={(e) =>
                  handleInputChange("paymentLink", e.target.value)
                }
                className={styles.formInput}
                style={{ gridColumn: "span 2" }}
              />

              {/* <Textarea
                label="הערות"
                value={formData.additionalInfo}
                onChange={(e) =>
                  handleInputChange("additionalInfo", e.target.value)
                }
                className={styles.formInput}
                minRows={3}
              /> */}
            </div>

            <div className={styles.disclaimer}>
              <Title order={5}>
                הוספת שחקנים תתאפשר במסך המשחק לאחר יצירתו
              </Title>
            </div>

            <Button
              type="submit"
              fullWidth
              leftSection={<IconCircleCheck />}
              className={styles.submitButton}
            >
              צור משחק
            </Button>
          </form>
        </div>
      </Container>
      <Footer />
    </ModalContainer>
  );
};

export default CreateGamePage;
