import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  VStack,
  Text,
  Select,
} from "native-base";
import Colors from "../data/colors";
import { CheckIcon } from "native-base";
import ROUTES from "../Navigation/routes";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

function RegisterScreen({ props }) {
  const navigation = useNavigation();
  const [entity, setEntity] = React.useState("");
  const handleChange = (e) => {
    setEntity({
      ...entity,
      [e.target.placeholder.toLowerCase()]: e.target.value,
    });
  };
  const sendData = async () => {
    const res = axios.post("http://localhost/5000/org1/enroll", {
      user: entity.email,
      password: entity.password,
    });
    if (res.status === 200) {
      return true;
    } else return false;
  };
  return (
    <Box flex={1} w="full" h="full" bg="white">
      <Image
        alt="cover"
        resizeMode="cover"
        width={"full"}
        height={250}
        borderBottomRadius="30"
        source={require("../../assets/LogIn.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        bottom="-101"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>SIGN UP</Heading>
        <VStack space={4} pt="6">
          <Select
            minWidth="80%"
            minHeight="4"
            rounded={9}
            accessibilityLabel="Register As"
            placeholder="Register As"
            _selectedItem={{
              bg: "teal.400",
              endIcon: <CheckIcon size={1} />,
            }}
            mt="1"
          >
            <Select.Item label="Public User" value="user" />
            <Select.Item label="Manufacturer" value="manufacturer" />
            <Select.Item label="Retailer" value="retailer" />
            <Select.Item label="Collecting Agent" value="collector" />
            <Select.Item label="Recycling Agent" value="recycler" />
          </Select>
          <Input
            variant="rounded"
            rounded={9}
            placeholder="User Name/ Organization Name"
            w="80%"
          />
          <Input
            onChange={(e) => {
              handleChange(e);
            }}
            variant="rounded"
            rounded={9}
            type="password"
            placeholder="Password"
            w="80%"
          />
        </VStack>
        <Button
          my={"5"}
          w="50%"
          bg={Colors.buttonDark}
          rounded={40}
          onPress={async () => {
            const res = await sendData();
            if (res) {
              navigation.replace(ROUTES.HOME);
            }
          }}
        >
          Sign Up
        </Button>
        <Pressable onPress={() => navigation.replace(ROUTES.LOGIN)}>
          <Text color={"gray.400"}>Already have an account? Sign In</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
