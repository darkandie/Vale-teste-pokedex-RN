import { SafeAreaView} from 'react-native';
import React, { type FunctionComponent } from 'react';
import { Header } from '../../components/Header';
import { ListComponent } from '../../components/ListComponent';

const Home: FunctionComponent = () => {
  return (
    <SafeAreaView style={{flexDirection: "column", flex: 1}}>
      <Header />
      <ListComponent />
    </SafeAreaView>
  )
}

export default Home;