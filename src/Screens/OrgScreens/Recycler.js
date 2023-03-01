import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "native-base";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Box, Modal, Text, Image } from "native-base";
import Colors from "../../data/colors";
import ROUTES from "../../Navigation/routes";
import tik from "../../../assets/images/others/success.png";

export default function Recycler({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    setShowModal(true);
    console.log("Type: " + type + "\nData: " + data);
  };

  if (hasPermission === null) {
    return (
      <View styles={Styles.container}>
        <Text>Requesting For Camera Permission</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View styles={Styles.container}>
        <Text style={Styles.mainText}>Can't Scan... No Access To Camera</Text>
        <Button
          style={Styles.button}
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }


  return (
    <Box flex={1} w="full" safeAreaTop marginTop={20}>
      <View styles={Styles.container}>
        <View styles={{borderRadius:20,}}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{
              height: 350,
              width: 400,
              alignSelf: "center",
              borderRadius:20,
              justifyContent: "center",
            }}
          />
        </View>

        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            fontSize: 16,
            margin: 20,
          }}
        >
          {text}
        </Text>
        {scanned && (
          <Button
            h={10}
            w="70%"
            backgroundColor={Colors.buttonDark}
            borderRadius={20}
            justifyContent="center"
            alignSelf="center"
            onPress={() => {
              setScanned(false);
            }}
          >
            {" "}
            Scan Again?{" "}
          </Button>
        )}
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            // navigation.navigate(ROUTES.DETAIL);
          }}
        >
          <Modal.Content h={300} w={300}>
            <Modal.CloseButton />
            <Modal.Body alignItems={"center"}>
              <Text bold fontSize={18}>
                Data Added Successfully
              </Text>
              <Image source={tik} alt="tik" resizeMode="cover" size={200} />
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>
    </Box>
  )
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "50px",
    },
    barCodeBox: {
      backgroundColor: "tomato",
      alignItems: "center",
      borderRadius: "50",
      justifyContent: "center",
      overflow: "hidden",
    },
    mainText: {
      fontSize: 16,
      margin: 20,
    },
    button: {
      margin: 20,
      backgroundColor: "",
    },
  });