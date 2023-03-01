import { Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "native-base";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Box,View, } from "native-base";
import Colors from "../data/colors";

export default function Scanner() {
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
    console.log("Type: " + type + "\nData: " + data);
  };

  function onURLPress() {
    Linking.openURL(text);
  }
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
        <View styles={{ borderRadius: 20 }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{
              height: 350,
              width: 400,
              alignSelf: "center",
              borderRadius: 20,
              justifyContent: "center",
            }}
          />
        </View>

        <TouchableOpacity style={{backgroundColor:Colors.purple, marginVertical:15, marginHorizontal:45, borderRadius:5}}>
          <Text
            onPress={onURLPress}
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: 16,
              margin: 20,
              color:'white'
            }}
          >
            {text}
          </Text>
        </TouchableOpacity>
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
      </View>
    </Box>
  );
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
