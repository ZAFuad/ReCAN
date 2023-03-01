import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  VStack,
  View,
  Select,
  Modal,
  Text,
} from "native-base";
import Colors from "../data/colors";
import React, { useState } from "react";
import tik from "../../assets/images/others/success.png";
import { ImageBackground } from "react-native";
import ShowModal from '../Components/ShowModal'

const FormScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box flex={1} w="full" h="full" bg="white">
      <Box w="full" h="full" position="absolute" pt={19} alignItems="center">
        <Heading>Update Info</Heading>
        <VStack space={4} pt="6" w={"80%"}>
          <Input
            variant="rounded"
            rounded={9}
            placeholder="Full Name/ Organization Name"
          />
          <Input variant="rounded" rounded={9} placeholder="Batch No" />
          <Input variant="rounded" rounded={9} placeholder="Collecting Date" />
        </VStack>
        <Button
          my={"5"}
          w="50%"
          bg={Colors.buttonDark}
          rounded={40}
          //   onPress={() => navigation.navigate(ROUTES.HOME)}
          onPress={() => setShowModal(true)}
        >
          Update
        </Button>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content h={250} w={250} >
            <Modal.CloseButton />
            <Modal.Body alignItems={'center'} >
              <Text bold fontSize={18}>Successfully Updated</Text>
              <Image source={tik} alt="tik" resizeMode="cover" size={200} />
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </Box>
    </Box>
  );
};

export default FormScreen;
