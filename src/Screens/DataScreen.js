import { Box, Center, Flex, ScrollView, Text } from "native-base";
import React from 'react'
import Colors from "../data/colors";
import ProductItem from "../Components/ProductItem";
function DataScreen (){
  return (
    <Box flex={1} safeAreaTop bg={"white"}>
      <Center w="full" py={5} >
        <Text color={Colors.buttonDark} fontSize={20} bold >
          Products
        </Text>
      </Center>
      <ScrollView showsVerticalScrollIndicator={false} >
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </ScrollView>
    </Box>
  )
}

export default DataScreen