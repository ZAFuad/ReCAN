import React from 'react'
import { Center, Flex,Text, ScrollView } from 'native-base'
import ProductItem from './ProductItem'
import { useNavigation } from '@react-navigation/native';

export default function HomeProduct() {
  const navigation = useNavigation();

  return (
    <ScrollView flex={1} pt={5} showsVerticalScrollIndicator={false}>
       <Flex flexWrap='wrap' direction='row' justifyContent="center">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
       </Flex>
    </ScrollView>
  )
}