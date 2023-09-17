import React from 'react';
import { Heading, Image, Center, Box } from 'native-base';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colorByType } from '../../util/getColorByType';

interface DetailsHeaderProps {
  id?: number ;
  imgUrl?: string;
  type: string;
}

const DetailsHeader = ({id, imgUrl, type}: DetailsHeaderProps): JSX.Element => {
  return (
    <>
      <Box flex={1} bg={colorByType[type]} width="full"> 
        <Heading size="sm" alignSelf='flex-end' color="#fff" paddingY={5} paddingX={5}>{id}</Heading>
      </Box>
      <Center position="relative">
        <Image zIndex={3} bottom={-80} position="absolute" source={{uri: imgUrl}} size="2xl" alt={"pokemon"}/>
        <Icon name="pokeball" color={colorByType[type+ "_light"]} size={280} style={{zIndex: 2, position: "absolute", bottom: -20, right: -20}}/>
      </Center>
    </>
  )
}

export default DetailsHeader;