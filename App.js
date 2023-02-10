import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import OccupanciesContainer from './OccupanciesContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Live Gym Counts:</Text>
      <OccupanciesContainer style={{top: 50}}></OccupanciesContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    //justifyContent: 'center',
  },

  heading: {
    paddingTop: 50,
    margin: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  }
});
