import React from "react";
import styles from "./ModalContainer.module.css";

interface ModalContainerProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  opened,
  onClose,
  title,
  children,
}) => {
  return (
    <div
      opened={opened}
      onClose={onClose}
      title={title}
      centered
      overlayOpacity={0.5}
      overlayBlur={3}
      size="lg"
      className={styles.modal}
    >
      {children}
    </div>
  );
};

export default ModalContainer;
