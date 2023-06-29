import {Text, View,ScrollView, ImageBackground } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

export default function Experiance() {

    return (
      <View style={{flex:1}}>
        <ImageBackground source={require('../Images/8.png')} 
        style={{width:'100%',height:'100%', }}
        resizeMode='cover'>
          <View style={{ flex: 1,marginBottom:0, padding:20}}>
          <ScrollView style={{ flex: 1,}}>
          <View >
          <Text style={{fontSize:20, fontWeight:700}}>
            SELISE rockin' Softwawre
            </Text>
            <Text style={{fontSize:20, fontWeight:600}}>Dhaka, bangladesh</Text>
            <Text style={{fontSize:18}}>April 2019 - June 2021</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize:17, fontWeight:700}}>Responsibilities</Text>
        <Unorderedlist>
            <Text style={{fontSize:17}}>Develop maintainable and scalable web applications on Angular</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={{fontSize:17}}>Develop REST API, windows-service, and ETLs with .NET Core,
               MongoDB as NoSQL.</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={{fontSize:17}}>Connet different services of our micro-service architehture using RabbitMQ as messaging solution. </Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={{fontSize:17}}>Maintain versions of the app through Git. </Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={{fontSize:17}}>Deploy through CI/CD pipe lines, Docker and Jenkins</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={{fontSize:17}}>Keep everyone in the loop through Jira using Agile Scrum methodologys.</Text>
          </Unorderedlist>
         
        </View>
          </ScrollView>
          </View>
         
          
        </ImageBackground>
        
      </View>
      
    );
  }