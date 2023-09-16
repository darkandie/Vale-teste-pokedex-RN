import { FlatList } from 'react-native';
import React, { type FunctionComponent } from 'react';
import { Box, Center } from 'native-base';
import Data from './Data';
import { PokemonCard } from '../PokemonCard';

const ListComponent: FunctionComponent = () => {
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
            data={Data}
            renderItem={item => <PokemonCard {...item}/>}
            keyExtractor={item => item.id}
            numColumns={3}
          />
        </Center>
      </Box>  
    </Center>
  )
}

export default ListComponent;