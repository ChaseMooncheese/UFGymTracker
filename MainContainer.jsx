import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView} from 'react-native';
import OccupancyBox from './OccupancyBox';
import axios from 'axios';

export default function MainContainer() {
  const [data, setData] = useState(null);
  const localurl = 'http://10.0.0.242:3000';
  const url = 'https://us-central1-uf-gym-tracker.cloudfunctions.net/FetchGymData';

  const updateData = () => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
    })
    .catch( err =>{
      console.log(err);
    });   
  }

  useEffect( () => {
    updateData();
    //request an update every 20 seconds
    //const interval = setInterval(updateData, 2000000);

    //return () => {clearInterval(interval)};
  }, []);


  

  return (
    
    <View style={styles.occupanciesContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>SW REC</Text>
      </View>
      
      <OccupancyBox location='SWRC Weight Room ' data={data}></OccupancyBox>
      <OccupancyBox location='SWRC Cardio Room 2' data={data}></OccupancyBox>
      <OccupancyBox location='SWRC Cardio Room 2' data={data}></OccupancyBox>
      <OccupancyBox location='SWRC Cardio Room 2' data={data}></OccupancyBox>
      <OccupancyBox location='SWRC Cardio Room 2' data={data}></OccupancyBox>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Student Rec</Text>
      </View>
      



    </View>
  );
}

const styles = StyleSheet.create({
  occupanciesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    //width:400,
    width: '100%',
    height: '75%',
    borderRadius:50,
    backgroundColor: '#212121',
    //alignItems: 'center',
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

  occupanciesSection: {
    marginTop: 10,
    marginBottom: 10
  },

  scrollviewStyle: {
    width: '100%',
    height: '75%',
    borderRadius:50,
    backgroundColor: '#212121',
    //alignItems: 'center',
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
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
  },

  headingContainer: {
    width:'70%', 
    marginBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomColor:'gray',
  }

});
