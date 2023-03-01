import React, { useContext, useState } from "react";
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
import AuthApi from "../Contexts/AuthContxt";
function LoginScreen({ navigation }) {
  // const navigation = useNavigation();
  //wherever you need to get the current state of the app  user you will call the useContext hook from react then pass AuthApi declared in ./context/AuthApi
  //lets say we do auth = useContext(AuthApi), instance of this auth has two values 1) auth.auth which saves the of auth declared in global state and 2) auth.setAuth which
  //sets the value;
  const [entity, setEntity] = React.useState(undefined);
  const auth = useContext(AuthApi);
  const sendData = async () => {
    console.log(entity);
    return true;
  };
  const handleChange = (e) => {
    console.log(e.target);
    setEntity({
      ...entity,
      [e.target.placeholder.toLowerCase()]: e.target.value,
    });
  };
  return (
    <Box flex={1} w="full" h="full" bg="white">
      <Image
        alt="cover"
        resizeMode="cover"
        width={"full"}
        height={330}
        borderBottomRadius="30"
        source={require("../../assets/LogIn.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        bottom="-160"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>LOG IN</Heading>
        <VStack space={5} pt="6">
          <Select
            minWidth="80%"
            minHeight="4"
            rounded={25}
            accessibilityLabel="Log In As"
            placeholder="Log In As"
            onValueChange={(e) => {
              auth.setAuth(e);
            }}
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
            label="user"
            onChange={(e) => handleChange(e)}
            variant="rounded"
            placeholder="User Name"
            w="80%"
          />
          <Input
            onChange={(e) => handleChange(e)}
            label="password"
            variant="rounded"
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
            console.log();
            if (res) {
              navigation.replace(ROUTES.HOME);
            }
          }}
        >
          Log In
        </Button>
        <Pressable onPress={() => navigation.navigate(ROUTES.REGISTER)}>
          <Text color={"gray.400"}>Create an account?</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
