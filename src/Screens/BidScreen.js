import React, { useState } from "react";
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import ROUTES from "../Navigation/routes";
import Colors from "../data/colors";
import { Image, Text, View, Modal } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import tik from "../../assets/images/others/success.png";

const { height } = Dimensions.get("window");

const BidScreen = ({ navigation, route }) => {
  const [showModal, setShowModal] = useState(false);
  const data = route.params;
  const [fontsLoaded] = useFonts({
    gilroyBold: require("../../assets/fonts/Gilroy-Bold.ttf"),
    gilroyLight: require("../../assets/fonts/Gilroy-Light.ttf"),
    gilroyMedium: require("../../assets/fonts/Gilroy-Medium.ttf"),
    gilroyRegular: require("../../assets/fonts/Gilroy-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      source={data.image}
      alt={data.name}
      style={{
        flex: 1,
      }}
    >
      <BlurView
        tint="light"
        intensity={90}
        style={{
          flex: 1,
        }}
      >
        <SafeAreaView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginTop: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  zIndex: 1,
                }}
                // onPress={() => goBack()}
              >
                <BlurView
                  tint="light"
                  intensity={80}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 33,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon size={40} name="close" color={"white"} />
                </BlurView>
              </TouchableOpacity>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 33,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.lightGreen,
                  marginLeft: 40,
                }}
              >
                <Image
                  source={data.image}
                  alt={data.name}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginVertical: 40,
            }}
          >
            <Text
              style={{
                color: "rgba(0,0,0,0.6)",
                paddingVertical: 15,
                fontSize: 38,
                fontFamily: "gilroyRegular",
              }}
            >
              Make
            </Text>
            <Text
              style={{
                color: "rgba(0,0,0,0.9)",
                fontSize: 50,
                paddingVertical: 28,
                fontFamily: "gilroyBold",
              }}
            >
              collection bid
            </Text>

            <View
              style={{
                marginVertical: 40,
              }}
            >
              <BlurView
                tint="dark"
                style={{
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 50,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 33,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                >
                  <Image
                    style={{
                      width: "50%",
                      height: "50%",
                    }}
                    resizeMode="contain"
                    alt="eth"
                    source={require("../../assets/images/currency/eth-logo.png")}
                  />
                </View>
                <TextInput
                  keyboardType="numeric"
                  style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    fontSize: 50,
                    color: "white",
                    fontFamily: "gilroyBold",
                  }}
                />
              </BlurView>
            </View>
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              style={{
                backgroundColor: Colors.buttonDark,
                padding: 30,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontFamily: "gilroyMedium",
                }}
              >
                Make Bid
              </Text>
            </TouchableOpacity>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content h={300} w={300}>
                <Modal.CloseButton />
                <Modal.Body alignItems={"center"}>
                  <Text bold fontSize={18}>
                    Successful
                  </Text>
                  <Image source={tik} alt="tik" resizeMode="cover" size={200} />
                </Modal.Body>
              </Modal.Content>
            </Modal>
          </View>
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  );
};

export default BidScreen;
