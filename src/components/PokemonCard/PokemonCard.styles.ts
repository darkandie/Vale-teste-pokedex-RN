import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  name: { 
    position: "absolute", 
    bottom: 5, 
    fontWeight: "400", 
    color: 'black',
  },
  id: { 
    position: "absolute", 
    top: 5, 
    right: 5, 
    alignSelf: "flex-end", 
    fontSize: 10
  }
});

export default styles;