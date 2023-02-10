import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';

const circleBackgroundColor = '#333333';
const circlePrimaryColor = '#ffffff';
const circleX = 50;
const circleY = 50;
const radius = 40;
const circumference = 2 * Math.PI * radius;
let value = 0.50;


const CircleProgressBar = (props) => {
    
   return (
    <View style={styles.box}>
        <Svg height="100%" width="100%" viewBox="0 0 100 100">

            <Circle
            cx = {circleX}
            cy = {circleY}
            r = '40'
            stroke = {circleBackgroundColor}
            strokeWidth= '12'

            />

            <Circle
            cx = {circleX}
            cy = {circleY}
            r = '40'
            //stroke = '#ffffff'
            //stroke = '#303858'
            stroke = {circlePrimaryColor}
            strokeWidth= '6'
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - value)}

            />
        </Svg>
    </View>
   )
}

export default OccupancyBox = (props) =>{
    return (
        <View style= {styles.box}>
            <CircleProgressBar></CircleProgressBar>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        maxWidth: 300,
        maxHeight: 300,
        aspectRatio: 1,
        //borderColor:'pink',
        //borderWidth: 0.5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      
      },
    }
)