import React, { type FunctionComponent } from "react";
import { Box, Input } from "native-base";

import Icon from "react-native-vector-icons/Feather";
import Search from "react-native-vector-icons/Fontisto";
import styles from './SearchComponent.styles';

const SearchComponent: FunctionComponent = () => {
  return (
    <Box 
      flexDirection="row" 
      alignItems="center" 
      bg={"red.700"} 
      paddingBottom={6}
      >
      <Input 
        InputLeftElement={<Search name="search" color="red" size={15} style={{marginLeft: 10}}/>}
        mx="4" 
        placeholder="Search" 
        h={9} size="md" 
        width="80%" bg={"white"} 
        borderRadius={20}/>
      <Icon name="hash" size={15} color={"red"} style={styles.iconStyle}/>
    </Box>
  )
}

export default SearchComponent;