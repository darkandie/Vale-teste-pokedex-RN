import React, { type FunctionComponent } from 'react';
import { HStack, Heading } from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Header.styles';

const Header: FunctionComponent = () => {
  return (
    <Heading bg={'red.700'} paddingX={3} paddingY={15}>
      <HStack alignItems="center">
        <Icon name="pokeball" style={styles.iconStyle}/>
        <Heading size="lg" color={'white'}>Pokédex</Heading>
      </HStack>
    </Heading>
  )
}

export default Header;