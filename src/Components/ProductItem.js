import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  VStack,
  Pressable,
  ScrollView,
  View,
  Text,
} from "native-base";
import Colors from "../data/colors";

export default function ProductItem() {

  return (
      <Pressable>
        <Box mx={5} py={2}>
          <HStack
            alignItems="flex-start"
            bg="white"
            rounded="md"
            space={2}
            w="full"
            shadow={5}
            overflow="hidden"
          >
            <Flex w={"40%"} bg={Colors.lightGreen} h="full" py={2} pl={4}>
              <Text fontSize={15} bold>
                Product ID
              </Text>
              <Text fontSize={15} bold>
                Geo-location
              </Text>
            </Flex>

            <Flex w={"40%"} bg="white" py={2} pl={4}>
              <Text fontSize={15}>1234</Text>
              <Text fontSize={15}>123-123-1231-134</Text>
            </Flex>
          </HStack>
          
        </Box>
      </Pressable>
  );
}
