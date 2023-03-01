import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  Flex,
  HStack,
  Text,
  Image,
  NativeBaseProvider,
  ScrollView,
  StatusBar,
  View,
  FlatList,
  FileList,
} from "native-base";
import Icon from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../Navigation/routes";
import { SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { ImageBackground } from "react-native";
import Font from "../data/fonts";
import collections from "../data/collections";
import Colors from "../data/colors";
import { BlurView } from "expo-blur";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const { width } = Dimensions.get("window");

const Card = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        height: 320,
        width: width * 0.6,
        borderRadius: 60,
        backgroundColor: "white",
        marginLeft: 20,
        shadowColor: Colors.gray,
        shadowRadius: 10,
        shadowOpacity: 0.25,
        shadowOffset: { height: 10 },
        elevation: 10,
      }}
    >
      <ImageBackground
        source={data.image}
        alt={data.name}
        style={{ height: "100%", width: "100%" }}
      >
        <BlurView
          tint="dark"
          intensity={70}
          style={{
            bottom: 10,
            width: "95%",
            height: 65,
            marginHorizontal: 5,
            borderRadius: 30,
            overflow: "hidden",
            padding: 1,
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "gilroyBold",
                fontSize: 20,
              }}
            >
              {data.name}
              {data.id}
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "gilroyLight",
                fontSize: 15,
              }}
            >
              {data.creator}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.DETAIL, data)}
            style={{
              padding: 17,
              backgroundColor: Colors.yellow,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "gilroyBold",
                color: "white",
                fontSize: 17,
              }}
            >
              View
            </Text>
          </TouchableOpacity>
        </BlurView>
      </ImageBackground>
    </TouchableOpacity>
  );
};

function HomeScreen() {
  const [fontsLoaded] = useFonts({
    gilroyBold: require("../../assets/fonts/Gilroy-Bold.ttf"),
    gilroyLight: require("../../assets/fonts/Gilroy-Light.ttf"),
    gilroyMedium: require("../../assets/fonts/Gilroy-Medium.ttf"),
    gilroyRegular: require("../../assets/fonts/Gilroy-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const navigation = useNavigation();
  const logOutPress = () => {
    try {
      auth()
        .signOut()
        .then(() => {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: ROUTES.LOGIN })],
          });
          navigation.dispatch(resetAction);
          alert("You have signed out");
        });
    } catch (error) {
      console.log("err", error);
    }
  };
  

  return (
    // <NativeBaseProvider>
    // <View flex={1}>
    //   <View w="full"  height={60} bg={Colors.lightGreen} position="absolute" bottom={0} flexDirection="row" alignItems="center" >
    //   <TouchableOpacity style={{width:'20%', height:'100%', justifyContent:"center",alignItems:"center" }}>
    //   <Image alt="cover" resizeMode="cover" size={7} borderRadius='30' source={require("../../assets/icon-profile.png")}/>
    //   </TouchableOpacity>
    //   </View>
    // </View>
    // </NativeBaseProvider>
    // <Box flex={1} w="full">
    //   {/* <HomeSearch />
    //   <HomeProduct /> */}
    // </Box>
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor="white" />
      <View
        p={5}
        flexDir={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <View
          h={38}
          w={75}
          bgColor={Colors.yellow}
          borderRadius="20px"
          flexDir={"row"}
          alignItems="center"
          px={4}
        >
          <Image
            h={"1/2"}
            w={"1/5"}
            alt="eth"
            borderRadius="20"
            source={require("../../assets/images/currency/eth-logo.png")}
          />
          <Text fontWeight={"bold"} color="white" ml={2} fontSize={12}>
            22.5
          </Text>
        </View>
        {/* <Image
          h={10}
          w={10}
          borderRadius={40}
          alt="avatar"
          source={require("../../assets/images/user/avatar.png")}
        /> */}
        <TouchableOpacity onPress={() => logOutPress()}>
          <Icon name="logout" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          my={5}
          mx={6}
          fontWeight="bold"
          color={"black"}
          fontSize={22}
          fontFamily="gilroyBold"
        >
          Top NFTS
        </Text>
        <FlatList
          snapToInterval={width * 0.6}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
          horizontal
          data={collections}
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
        />
        {/* <Text my={5} mx={6} fontWeight="bold" color={"black"} fontSize={22} fontFamily= { "gilroyBold"}>
          Trending Collections
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
          horizontal
          data={collections}
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
