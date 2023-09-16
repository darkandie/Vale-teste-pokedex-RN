import { SafeAreaView} from 'react-native';
import React, { type FunctionComponent } from 'react';
import { Header } from '../../components/Header';
import { SearchComponent } from '../../components/SearchComponent';
import { ListComponent } from '../../components/ListComponent';

const Home: FunctionComponent = () => {
  return (
    <SafeAreaView style={{flexDirection: "column", flex: 1}}>
      <Header />
      <SearchComponent />
      <ListComponent />
    </SafeAreaView>
  )
}

export default Home;