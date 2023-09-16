import { Text } from 'react-native';
import React, { type FunctionComponent } from 'react';
import { Box, Center } from 'native-base';

const ListComponent: FunctionComponent = () => {
  return (
    <Center 
      alignItems="center" 
      bg={'red.700'} 
      flex={1} 
      padding={1}>
      <Box 
        bg={'white'} 
        w="full" 
        h="full" 
        borderRadius={8} 
        alignItems="center" 
        justifyContent="center"
      >
        <Text>ListComponent</Text>
      </Box>  
    </Center>
  )
}

export default ListComponent;