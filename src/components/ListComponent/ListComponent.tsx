import { FlatList , ActivityIndicator} from 'react-native';
import React, { type FunctionComponent } from 'react';
import { Box, Center, Input } from 'native-base';
import { PokemonCard } from '../PokemonCard';
import { useGetAllPokemonsQuery } from '../../store/services/pokemonApi';
import Icon from "react-native-vector-icons/Feather";
import Search from "react-native-vector-icons/Fontisto";

import styles from "./ListComponent.styles";

const ListComponent: FunctionComponent = () => {
  const { data, isLoading } = useGetAllPokemonsQuery();

  const Loader = (): JSX.Element => {
    return(
      <ActivityIndicator size={20} color={'red'}/>
    )
  }

  if(isLoading) return <Loader />;

  return (
    <>
    <Box 
      flexDirection="row" 
      alignItems="center" 
      bg={"red.700"} 
      paddingBottom={6}
      >
      <Input 
        InputLeftElement={<Search name="search" color="red" size={15} style={{marginLeft: 10}}/>}
        mx="4" 
        placeholder="Search" 
        h={9} size="md" 
        width="80%" bg={"white"} 
        borderRadius={20}/>
      <Icon name="hash" size={15} color={"red"} style={styles.iconStyle}/>
    </Box>
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
    </>
  )
}

export default ListComponent;