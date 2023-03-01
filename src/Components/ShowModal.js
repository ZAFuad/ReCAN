import { View, Text, Image } from "native-base";
import React, { useState } from "react";
import { Modal } from "native-base";
import tik from "../../assets/images/others/success.png";

const ShowModal = () => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content h={250} w={250}>
        <Modal.CloseButton />
        <Modal.Body alignItems={"center"}>
          <Text bold fontSize={18}>
            Successfully Updated
          </Text>
          <Image source={tik} alt="tik" resizeMode="cover" size={200} />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default Modal;
