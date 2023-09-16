import { SafeAreaView} from 'react-native';
import React, { type FunctionComponent } from 'react';
import { Header } from '../../components/Header';
import { SearchComponent } from '../../components/SearchComponent';

const Home: FunctionComponent = () => {
  return (
    <SafeAreaView>
      <Header />
      <SearchComponent />
    </SafeAreaView>
  )
}

export default Home;