import React from "react";
import { Box, View, Image, Text, ScrollView, FlatList } from "native-base";
import { Dimensions } from "react-native";
import wallet from "../../assets/images/currency/digital_wallet.jpg";
import collections from "../data/collections";
import Colors from "../data/colors";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");

const Card = ({ data }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        height: 250,
        width: width * 0.6,
        borderRadius: 60,
        marginTop:12,
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
      </ImageBackground>
    </TouchableOpacity>
  );
};

const WalletScreen = () => {
  return (
    <Box flex={1} w="full">
      <View h={200}>
        <Image
          source={wallet}
          alt="wallet image"
          style={{
            height: "100%",
            width: "100%",
            resizeMode:'cover'
          }}
        />
      </View>
      <View mt={3} justifyContent="center" alignItems={"center"}>
        <Text fontWeight={"bold"} color="black"  fontSize={22}>
          Account balance
        </Text>
        <View
          h={50}
          w={150}
          mt={2}
          bgColor={Colors.yellow}
          borderRadius="25px"
          flexDir={"row"}
          alignItems="center"
          px={4}
        >
          <Image
            size={"5"}
            alt="eth"
            py={4}
            px={2}
            source={require("../../assets/images/currency/eth-logo.png")}
          />
          <Text pl={4} fontWeight={"bold"} color="white" ml={2} fontSize={22}>
            22.5
          </Text>
        </View>
      </View>

      <View mt={5}>
        <Text
          alignSelf={"center"}
          fontWeight={"bold"}
          color="black"
          ml={2}
          fontSize={22}
        >
          NFT Collections
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false}>
          
          <FlatList
            snapToInterval={width * 0.6}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
            horizontal
            data={collections}
            renderItem={({ item }) => (
              <Card
                data={item}
                // navigation={navigation}
              />
            )}
          />
        </ScrollView>
      </View>
    </Box>
  );
};

export default WalletScreen;
