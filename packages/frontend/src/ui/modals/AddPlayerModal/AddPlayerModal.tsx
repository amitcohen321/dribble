import React, { useState } from "react";
import { Title, TextInput, Button, Select, NumberInput } from "@mantine/core";
import { IconCircleCheck, IconPlayFootball } from "@tabler/icons-react";
import styles from "./AddPlayerModal.module.css";
import ModalContainer from "../ModalContainer/ModalContainer";

const AddPlayerModal: React.FC = ({ role }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    status: "על המגרש",
    attackAbility: 0,
    defenseAbility: 0,
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Player Data:", formData);
    // TODO: Implement player creation logic
  };

  return (
    <ModalContainer opened={true} onClose={() => {}} title="הוספת שחקן">
      <div className={styles.formWrapper}>
        <Title order={2} className={styles.formTitle}>
          <IconPlayFootball size={24} /> הוספת שחקן
        </Title>
        <form onSubmit={handleSubmit} className={styles.createGameForm}>
          <div className={styles.formGrid}>
            <TextInput
              label="שם פרטי"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
              className={styles.formInput}
            />
            <TextInput
              label="שם משפחה"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
              className={styles.formInput}
            />
            <TextInput
              label="מספר טלפון"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              required
              className={styles.formInput}
            />
            <Select
              label="סטטוס"
              value={formData.status}
              onChange={(value) => handleInputChange("status", value || "")}
              data={[
                { value: "על המגרש", label: "על המגרש" },
                { value: "על הספסל", label: "על הספסל" },
              ]}
              required
              className={styles.formInput}
            />
            {role === "admin" && (
              <>
                <NumberInput
                  label="יכולת התקפה"
                  value={formData.attackAbility}
                  onChange={(value) =>
                    handleInputChange("attackAbility", value || 0)
                  }
                  min={0}
                  max={10}
                  required
                  className={styles.formInput}
                />
                <NumberInput
                  label="יכולת הגנה"
                  value={formData.defenseAbility}
                  onChange={(value) =>
                    handleInputChange("defenseAbility", value || 0)
                  }
                  min={0}
                  max={10}
                  required
                  className={styles.formInput}
                />
              </>
            )}
          </div>

          <Button
            type="submit"
            fullWidth
            leftSection={<IconCircleCheck />}
            className={styles.submitButton}
          >
            הוסף שחקן
          </Button>
        </form>
      </div>
    </ModalContainer>
  );
};

export default AddPlayerModal;
