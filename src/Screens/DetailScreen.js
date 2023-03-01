import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Font from "../data/fonts";
// import collections from "../data/collections";
import Colors from "../data/colors";
import { Box, Image, Text, View } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import ROUTES from "../Navigation/routes";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const { height } = Dimensions.get("window");

const DetailScreen = ({ navigation, route }) => {
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
    <Box flex={1} w="full" h="full" bg="white">
      <ImageBackground
        source={data.image}
        alt={data.name}
        style={{
          height: height / 1.5,
          width: "100%",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 12,
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                borderRadius: 33,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
              // onPress={() => goBack()}
            >
              <Icon size={30} name="chevron-back" color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                borderRadius: 33,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Icon size={30} name="heart-outline" color={Colors.yellow} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "rgba(0,0,0,0.3)",
              bottom:0,
              paddingTop:30
            }}
          >
            <View style={{flex:1, gap:5,bottom:10}}>
              <Text
                style={{
                  color: Colors.lightGreen,
                  fontFamily: "gilroyBold",
                  fontSize: 25,
                  paddingVertical:5
                }}
              >
                {data.name}
                {data.id}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontFamily: "gilroyMedium",
                  paddingVertical:5,
                  fontSize: 20,
                }}
              >
                @{data.creator}
              </Text>
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: "rgba(255,255,255,0.3)",
                borderRadius: 33,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                bottom:8
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
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 35,
        }}
      >
        <View style={{ flexDirection: "row" , marginLeft:10}}>
          <Text
            style={{
              color: "gray.400",
              fontSize: 20,
              fontFamily: "gilroyLight",
            }}
          >
            By
          </Text>
          <Text
            style={{
              color: Colors.yellow,
              fontFamily: "gilroyBold",
              marginLeft: 5,
              fontSize: 20,
            }}
          >
            {data.creator}
          </Text>
        </View>
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontFamily: "gilroyMedium",
            marginTop: 20,
            marginLeft:10
          }}
        >
          Highest Bid: {data.price}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.BID, data)}
          style={{
            marginTop: 30,
          }}
        >
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              backgroundColor: "rgba(0,0,0,1)",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                height: 50,
                borderRadius: 40,
                width: 50,
                backgroundColor: "rgba(255,255,255,0.3)",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
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
            <Text
              style={{
                fontFamily: "gilroyMedium",
                color: Colors.lightGreen,
                fontSize: 15,
                alignSelf:"center"
              }}
            >
              Make Collection Bid
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: 50,
                
              }}
            >
              <Icon
                name="chevron-forward"
                size={30}
                color={"white"}
                style={{
                  marginLeft: -10,
                  opacity: 0.2,
                }}
              />
              <Icon
                name="chevron-forward"
                size={30}
                color={"white"}
                style={{
                  marginLeft: -15,
                  opacity: 0.6,
                }}
              />
              <Icon
                name="chevron-forward"
                size={30}
                color={"white"}
                style={{
                  marginLeft: -15,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Box>
  );
};

export default DetailScreen;
