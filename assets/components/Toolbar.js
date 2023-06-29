import { TouchableOpacity, Text, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import {pages} from '../Constants/Pages';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


var componentPages=pages;







const Tab = createBottomTabNavigator();
export default function Toolbar() {
  var htmlView=[],i=0;
  componentPages.forEach(page => {
    htmlView.push(<Tab.Screen 
      options={{
        title: undefined,
        tabBarIcon: ({focused, size}) => (
           <MaterialCommunityIcons
              name={page.Icon}
              size={size}
              color={focused ? '#9E9C9C' : '#5EBA7D'}
           />
        ),
     }}
      key={i}
        name={page.Name} component={page.Component} 
        
    />);
    i++;
  });
  return (

    <Tab.Navigator useLegacyImplementation 
      >
        
        { htmlView}

      
      


  </Tab.Navigator>
  );
}