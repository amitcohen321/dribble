// React Component: AttackDefenseFormModal
import React, { useState } from "react";
import { Title, NumberInput, Button } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import styles from "./SetPowerModal.module.css";
import ModalContainer from "../ModalContainer/ModalContainer";

const SetPowerModal = () => {
  const [formData, setFormData] = useState({
    attackAbility: 1,
    defenseAbility: 1,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value || 1, // Default to 1 if value is empty or invalid
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // TODO: Add form submission logic
  };

  return (
    <ModalContainer opened={true} onClose={() => {}} title="הגדר יכולות שחקן">
      <div className={styles.formWrapper}>
        <Title order={2} className={styles.formTitle}>
          הגדר יכולות שחקן
        </Title>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <NumberInput
              label="יכולת התקפה"
              value={formData.attackAbility}
              onChange={(value) => handleInputChange("attackAbility", value)}
              min={1}
              max={5}
              required
              className={styles.input}
            />
            <NumberInput
              label="יכולת הגנה"
              value={formData.defenseAbility}
              onChange={(value) => handleInputChange("defenseAbility", value)}
              min={1}
              max={5}
              required
              className={styles.input}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            leftSection={<IconCircleCheck />}
            className={styles.submitButton}
          >
            הגדר
          </Button>
        </form>
      </div>
    </ModalContainer>
  );
};

export default SetPowerModal;