import { View } from 'react-native'
import React from 'react'
import { Box, Center } from 'native-base';

const AtributesContainer = (): JSX.Element => {
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
          </Center>
        </Box>  
      </Center>
    </View>
  )
}

export default AtributesContainer;