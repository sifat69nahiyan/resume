import { StyleSheet, Text, View,ScrollView, ImageBackground } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

export default function About() {

    return (
      <View >
          <ImageBackground source={require('../Images/3.jpg')} 
        style={{width:'100%',height:'100%', }}
        resizeMode='cover'> 
          <ScrollView style={{padding:20, marginBottom:20}}>
        <View style={{flex: 1}}>
            <Text style={styleCSS.parentBullet}>Programming Languages</Text>
            <View style={styleCSS.childBullet}>
              <View style={{paddingLeft:20, flexDirection:'row'}}>
                <Text style={{flex:1}}>{`\u25CF`}C#</Text>
                <Text style={{flex:1}}>{`\u25CF`}JavaScript</Text>
                <Text style={{flex:1}}>{`\u25CF`}TypeScript</Text>
              </View>
              <View style={{paddingLeft:20, flexDirection:'row'}}>
                <Text style={{flex:1}}>{`\u25CF`}C/C++</Text>
                <Text style={{flex:1}}>{`\u25CF`}Java</Text>
                <Text style={{flex:1}}>{`\u25CF`}Python(Basics)</Text>
              </View>
                
            </View>           
            <Text style={styleCSS.parentBullet}>Database</Text>
            <View style={{paddingLeft:20, flexDirection:'row'}} >
              <Text style={{flex:1}}>{`\u25CF`} MongoDB</Text>
              <Text style={{flex:1}}>{`\u25CF`} MySQL</Text>
              <Text style={{flex:1}}></Text>
            </View>
              
            <Text style={styleCSS.parentBullet}>Technology and FrameWork</Text>
              <View style={{paddingLeft:20, flexDirection:'row'}}>
                 <Text style={{flex:1}}>{`\u25CF`}Angular</Text>           
                 <Text style={{flex:1}}>{`\u25CF`}.Net Core</Text>
                 <Text style={{flex:1}}>{`\u25CF`}Git</Text>
              </View>
              <View style={{paddingLeft:20, flexDirection:'row'}}>
                <Text style={{flex:1}}>{`\u25CF`}RabbitMQ</Text>
                <Text style={{flex:1}}>{`\u25CF`}React Native</Text>
                <Text style={{flex:1}}></Text>
              </View>
              
            

            <Text style={styleCSS.parentBullet}>IDEs and tools</Text>
              <View style={{paddingLeft:20, flexDirection:'row'}}>
                <Text style={{flex:1}}>{`\u25CF`}Visual Studio</Text>           
                <Text style={{flex:1}}>{`\u25CF`}VS Code</Text>
                <Text style={{flex:1}}>{`\u25CF`}Webstrom</Text>
              </View>
              <View style={{paddingLeft:20, flexDirection:'row'}}>
                <Text style={{flex:1}}>{`\u25CF`}Netbeans</Text>
                <Text style={{flex:1}}>{`\u25CF`}RoboMongo</Text>
                <Text style={{flex:1}}></Text>
              </View>
            
              
            <Text style={styleCSS.parentBullet}>Others</Text>
              <View style={{paddingLeft:20, flexDirection:'row'}}>
                <Text style={{flex:1}}>{`\u25CF`}Jira</Text>
                <Text style={{flex:1}}>{`\u25CF`}Atlassian</Text>
                <Text style={{flex:1}}> {`\u25CF`}Jenkins</Text>
              </View>
              <View style={{paddingLeft:20, flexDirection:'row'}}>
                <Text style={{flex:1}}>{`\u25CF`}OOP concepts</Text>
                <Text style={{flex:1}}>{`\u25CF`}Bitbucket</Text>
                <Text style={{flex:1}}> {`\u25CF`}CI/CD pipe lines</Text>
              </View>
              <View style={{paddingLeft:20}}>
                <Text style={{flex:1}}>{`\u25CF`}Data Structure and Algorithms</Text>
                <Text style={{flex:1}}>{`\u25CF`}Analytical and problem-solving</Text>
              </View>

              
        </View>
      </ScrollView>
          </ImageBackground>
      </View>
      
      
    );
  }

  const styleCSS = StyleSheet.create({
    bulletSignParent:{
      fontSize:26
    },
    parentBullet: {
        fontSize:20,
        fontWeight:700,
        paddingTop:10,
        marginBottom:10
    },
    childBullet:{
      paddingLeft:10,
      fontSize:14
    }
  });