import { Text, View, Linking, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';


export default function Contact() {
  
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',
      flexDirection:'column'}}>
        <ImageBackground source={require('../Images/6.jpg')} 
        style={{width:'100%',height:'100%',justifyContent: 'center', alignItems: 'center' }}
        resizeMode='cover' >
        <View style={{justifyContent: 'center',marginBottom:20, alignItems: 'center'}}>
            <View style={{flexDirection:'row'}}>
                <Icon name='email' size={31} color="#808080"></Icon>
                <Text style={{fontSize:25,fontWeight:700}}>Email:</Text>
            </View>
            <Text style={{fontSize:20}} 
                onPress={() => Linking.openURL('mailto:sifat.nahiyan.official@gmail.com')}>
               sifat.nahiyan.official@gmail.com
            </Text>    
        </View>
        <View style={{ justifyContent: 'center',marginBottom:20, alignItems: 'center'}}>
            <View style={{flexDirection:'row'}}>
                <Icon name='phone' size={31} color="#808080"></Icon>
                <Text style={{fontSize:25,fontWeight:700}}>Phone:</Text>
            </View>
            <Text style={{fontSize:20}}
                onPress={()=>Linking.openURL(`tel:${7036875415}`)}>
              (703) 687-5415 
            </Text>
        </View>
        <View style={{ justifyContent: 'center',marginBottom:20, alignItems: 'center'}}>
            <View style={{flexDirection:'row'}}>
                <Image  style={{ width: 30, height: 30}}
                    source={require('../Images/linkedin.png')} 
                />
                <Text style={{fontSize:25,fontWeight:700}}>LinkedIn:</Text>
            </View>
            <Text style={{fontSize:20, color:'blue'}} 
            onPress={() => Linking.openURL('https://www.linkedin.com/in/sifat-nahiyan-8815b915b/')}>
                linkedin.com/in/sifat-nahiyan
            </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection:'row'}}>
                <Icon name='home' size={31} color="#808080"></Icon>
                <Text style={{fontSize:25,fontWeight:700}}>Address:</Text>
            </View>
            <Text style={{fontSize:20}}>12775 Cara Dr, Woodbridge</Text>
            <Text style={{fontSize:20}}>VA-22192</Text>
        </View>
        </ImageBackground>
      </View>
    );
  }