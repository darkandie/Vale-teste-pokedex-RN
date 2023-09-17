import { SafeAreaView, Text} from 'react-native';
import React, { type FunctionComponent, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DetailsHeader } from '../../components/DetailsHeader';
import { AtributeContainer } from '../../components/AtributesContainer';
import { useGetPokemonByNameQuery } from '../../store/services/pokemonApi';

interface DeatilsParamProps {
  name: string;
}

const Details: FunctionComponent = () => {
  const navigation = useNavigation();
  const { name } = useRoute().params as DeatilsParamProps;

  const { data, isLoading } = useGetPokemonByNameQuery(name);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, []);

  if(isLoading) return <Text>...carregando</Text>;

  return (
    <SafeAreaView style={{ flex: 1}}>
      <DetailsHeader 
        id={data?.id} 
        imgUrl={data?.sprites.other['official-artwork'].front_default}
      />
      <AtributeContainer
        attributes={data}
      />
    </SafeAreaView>
  )
}

export default Details;
