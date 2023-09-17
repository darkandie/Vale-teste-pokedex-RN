import { View, Text } from 'react-native';
import React, { type FunctionComponent } from 'react';
import { useRoute } from '@react-navigation/native';

interface DeatilsParamProps {
  name: string;
}

const Details: FunctionComponent = () => {
  const { name } = useRoute().params as DeatilsParamProps;

  return (
    <View>
      <Text>Details</Text>
      <Text>{name}</Text>
    </View>
  )
}

export default Details;
