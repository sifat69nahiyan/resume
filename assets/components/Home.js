import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView, ImageBackground } from 'react-native';
import { Image } from 'react-native-elements';

export default function Home() {
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground source={require('../Images/3.jpg')} 
        style={{width:'100%',height:'100%',justifyContent: 'center', alignItems: 'center' }}
        resizeMode='cover'>
        <View style={{ flex: 1, justifyContent: 'center',padding:20, alignItems: 'center' }}>
        <Image  style={{ width: 120, height: 120, borderRadius: 60 }}
             source={require('../Images/sifat.jpeg')} 
          />
          <Text style={{fontSize:30,fontWeight:700}} >Sifat Nahiyan</Text>
          <Text style={{fontSize:18, paddingTop:10,color:"#FFFFFF", letterSpacing:.1,textAlign:"justify"}}>
            My experience as a software engineer has given me a 
            deep-rooted passion for programming and a talent for solving 
            complex problems. My expertise lies in data structures and 
            algorithms, and I am well-versed in a variety of technologies 
            including .Net Core Angular and messaging systems like 
            RabbitMQ. Additionally, I have extensive knowledge of both 
            MySQL and NoSQL databases. I am proficient in both high-level 
            languages such as Java, C#, JavaScript, and Python, as well
            as low-level languages like C/C++.
          </Text>
      </View>
        </ImageBackground>
      </View>
      
    );
  }