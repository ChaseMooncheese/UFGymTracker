import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import OccupancyBox from './OccupancyBox';

export default function occupanciesContainer() {
  return (
    <View style={styles.occupanciesContainer}>
      <OccupancyBox></OccupancyBox>
      <OccupancyBox></OccupancyBox>
    </View>
  );
}

const styles = StyleSheet.create({
  occupanciesContainer: {
    flexDirection: 'row',
    //width:400,
    width: '100%',
    height: '75%',
    borderRadius:50,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },

  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  box: {
    //width:100,
    //height:100,
    flex: 1,
    aspectRatio: 1,
    borderColor:'black',
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

  
  },

});
