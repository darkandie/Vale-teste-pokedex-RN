import { SafeAreaView} from 'react-native';
import React, { type FunctionComponent, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DetailsHeader } from '../../components/DetailsHeader';
import { AtributeContainer } from '../../components/AtributesContainer';

interface DeatilsParamProps {
  name: string;
}

const Details: FunctionComponent = () => {
  const navigation = useNavigation();
  const { name } = useRoute().params as DeatilsParamProps;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1}}>
      <DetailsHeader />
      <AtributeContainer />
    </SafeAreaView>
  )
}

export default Details;
