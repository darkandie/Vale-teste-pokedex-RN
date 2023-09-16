import { Text, ImageBackground } from 'react-native'
import React from 'react';
import { Box, Center, Image } from 'native-base';
import { type PokemonDataProps } from '../ListComponent/Data';
import Images from '../../../assets/images/images';

import styles from './PokemonCard.styles';

interface PokemonCardProps { 
  item: PokemonDataProps;
}

const PokemonCard = ({item}: PokemonCardProps): JSX.Element => {
  return (
    <>
      <Box overflow="hidden" borderWidth={1} borderColor={"gray.300"} position="relative" margin={1} w="31%" rounded={8}>
        <ImageBackground source={Images.background()} resizeMode="cover">
          <Text style={styles.id}>{item.id}</Text>
          <Image zIndex={2} source={{uri: item.urlImage}} size="xl" alt="pokemon"/>
          <Center>
            <Text style={styles.name}>{item.name}</Text>
          </Center>
        </ImageBackground>  
      </Box>
    </>
  )
}

export default PokemonCard;