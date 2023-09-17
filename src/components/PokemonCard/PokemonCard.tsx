import { Text, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react';
import { Box, Center, Image } from 'native-base';
import Images from '../../../assets/images/images';
import { useGetPokemonByNameQuery } from '../../store/services/pokemonApi';
import { useNavigation } from '@react-navigation/native'

import styles from './PokemonCard.styles';

interface PokemonCardProps { 
  item: {name: string, url: string};
}

const PokemonCard = ({item}: PokemonCardProps): JSX.Element => {
  const { navigate } = useNavigation();
  const {data, isLoading} = useGetPokemonByNameQuery(item.name);

  const Loader = (): JSX.Element => {
    return(
      <ActivityIndicator size={20} color={'red'}/>
    )
  }

  console.log(data, 'PokemonCard');

  if(isLoading) return <Loader />;

  const handleNavigation = ():void => { navigate('Details', {name: data?.name});};

  return (
    <Box shadow={1} overflow="hidden" borderWidth={1} borderColor={"gray.300"} position="relative" margin={1} w="31%" rounded={8}>
      <TouchableOpacity onPress={handleNavigation}>
        <ImageBackground source={Images.background()} resizeMode="cover">
          <Text style={styles.id}>{data?.id}</Text>
          <Image zIndex={2} source={{uri: data?.sprites.front_default}} size="xl" alt="pokemon" marginBottom={4}/>
          <Center>
           <Text style={styles.name}>{data?.name}</Text>
          </Center> 
        </ImageBackground> 
      </TouchableOpacity>
    </Box>
  )
}

export default PokemonCard;