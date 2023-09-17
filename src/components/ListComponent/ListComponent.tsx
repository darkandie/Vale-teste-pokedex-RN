import { FlatList , ActivityIndicator} from 'react-native';
import React, { type FunctionComponent } from 'react';
import { Box, Center } from 'native-base';
import { PokemonCard } from '../PokemonCard';
import { useGetAllPokemonsQuery } from '../../store/services/pokemonApi';


const ListComponent: FunctionComponent = () => {
  const { data, isLoading } = useGetAllPokemonsQuery();

  const Loader = (): JSX.Element => {
    return(
      <ActivityIndicator size={20} color={'red'}/>
    )
  }

  if(isLoading) return <Loader />;

  return (
    <Center 
      bg={'red.700'} 
      flex={1} 
      padding={1}>
      <Box 
        bg={'white'} 
        w="full" 
        h="full" 
        borderRadius={8} 
        paddingX={1}
        paddingY={5}
      >
        <Center>
          <FlatList
            data={data?.results}
            renderItem={({ item }) => <PokemonCard item={item}/>}
            keyExtractor={item => item.name}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </Center>
      </Box>  
    </Center>
  )
}

export default ListComponent;