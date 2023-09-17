import { Text } from 'react-native'
import React from 'react'
import { Heading } from 'native-base'

const DetailsHeader = (): JSX.Element => {
  return (
    <Heading flex={1} bg={"lime.500"}>
      <Text>001</Text>
    </Heading>
  )
}

export default DetailsHeader;