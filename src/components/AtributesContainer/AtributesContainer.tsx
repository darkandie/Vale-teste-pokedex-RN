import { View} from 'react-native'
import React from 'react'
import { Box, Center, HStack, Text, VStack } from 'native-base';
import {type Pokemon } from '../../types/Pokemon';
import IconWeight from "react-native-vector-icons/FontAwesome5";
import IconHeight from "react-native-vector-icons/MaterialCommunityIcons";
import { colorByType } from '../../util/getColorByType';

interface AtributesContainerProps {
  attributes?: Pokemon;
}

const AtributesContainer = ({attributes}: AtributesContainerProps): JSX.Element => {
  return (
    <View style={{flex: 2, zIndex: 1}}>
      <Center 
        bg={"green.600"}
        flex={1} 
        padding={1}
      >
        <Box 
          bg={'white'} 
          w="full" 
          h="full" 
          borderRadius={8} 
          paddingX={1}
          paddingY={5}
        >
          <Center>
            <HStack flexDirection="row" mt={12} space={5}>
              {attributes?.types.map(item => {
                return (
                <Box borderRadius={16} key={item.type.name} bg={colorByType[item.type.name]}>
                  <Text color={"white"} bold paddingX={2} pb={1}>{item.type.name}</Text>
                </Box>)
              })}
            </HStack>
          </Center>
          <Center>
            <Text mt={3} bold color={"green.500"}>About</Text>
          </Center>
          <Center mt={5}>
            <HStack space={5} alignItems="flex-end" marginLeft={7}>
              <Box borderRightColor={"muted.300"} borderRightWidth={1}>
                <HStack>
                  <Box marginRight={5}>
                    <HStack alignItems="center" space={3}>
                      <IconWeight name="weight-hanging" size={10} color={"#737373"}/>
                      <Text  bold color={"muted.500"}>{`${attributes?.weight} kg`}</Text>
                    </HStack>
                  </Box>
                </HStack>
                <Center pt={4}>
                  <Text fontSize="xs" color={"muted.500"}>Weight</Text>
                </Center>  
              </Box>
              <Box>
                <HStack>
                  <Box>
                    <HStack alignItems="center" space={3}>
                      <IconHeight name="altimeter" size={15} color={"#737373"}/>
                      <Text bold color={"muted.500"}>{`${attributes?.height} m`}</Text>
                    </HStack>
                  </Box>
                </HStack>
                <Center pt={3}>
                  <Text fontSize="xs" color={"muted.500"}>Height</Text>
                </Center>  
              </Box>
              <Box borderLeftColor={"muted.300"} borderLeftWidth={1}>
                <VStack>
                  <Box marginLeft={5}>
                    <Text bold color={"muted.500"}>{attributes?.moves[0].move.name}</Text>
                    <Text bold color={"muted.500"}>{attributes?.moves[1].move.name}</Text>
                  </Box>
                </VStack>
                <Center>
                  <Text fontSize="xs" color={"muted.500"}>Moves</Text>
                </Center> 
              </Box>
            </HStack>
          </Center>
        </Box>  
      </Center>
    </View>
  )
}

export default AtributesContainer;