import React from 'react';
import { Heading, Image, Center, Box } from 'native-base';

interface DetailsHeaderProps {
  id?: number ;
  imgUrl?: string;
}

const DetailsHeader = ({id, imgUrl}: DetailsHeaderProps): JSX.Element => {
  return (
    <>
      <Box flex={1} bg={"lime.500"} width="full"> 
        <Heading size="sm" alignSelf='flex-end' color="#fff" paddingY={5} paddingX={5}>{id}</Heading>
      </Box>
      <Center position="relative">
        <Image zIndex={2} bottom={-80} position="absolute" source={{uri: imgUrl}} size="2xl" alt={"pokemon"}/>
      </Center>
    </>
  )
}

export default DetailsHeader;