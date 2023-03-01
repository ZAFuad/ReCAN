import React from 'react'
import { HStack,Input,Text } from 'native-base'
import Colors from '../data/colors'

function HomeSearch() {
  return (
    <HStack space={3} w="full" px={8} bg={Colors.lightGreen} justifyContent="center" py={8} alignItems="center" safeAreaTop>
        <Input placeholder='Search by geo-location' variant="filled" _focus={{bg:"white"}} w="90%" bgColor="white" h={12} borderWidth={0.01} />
    </HStack>
  )
}

export default HomeSearch