import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';


export default function Education() {
  const image = {uri: '../Images/1.jpg'};

    return (
      <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
        <BackgroundImage source={require('../Images/1.jpg')} 
        style={{width:'100%',height:'100%',justifyContent: 'center', alignItems: 'center' }}
        resizeMode='cover' >
          <Text style={{fontSize:28, fontWeight:700}}>
            Bachelor of Science (BSc)
          </Text>
          <Text style={{fontSize:20, fontWeight:600}}>in</Text>
          <Text style={{fontSize:25, fontWeight:700}}>
            Computer Science and Engineering
          </Text>
          <Text style={{fontSize:20, fontWeight:600}}>from</Text>
          <Text style={{fontSize:22, fontWeight:700}}>
            Shahjalal University of Science and </Text>
          <Text style={{fontSize:22, fontWeight:700}}>Technology</Text>
          <Text style={{fontSize:20, fontWeight:600}}>Sylhet, Bangladesh</Text>
        </BackgroundImage>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
 
    image: {
      opacity:100,
      flex: 1,
      justifyContent: 'center',
    },
    
  });