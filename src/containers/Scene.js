import React, {Component} from 'react';
import { NavigatorIOS, View, TouchableHighlight, Text ,Image, StatusBar, Modal} from 'react-native';
import Splash from '../components/Splash';
import ModalMenu from '../components/shared/ModalMenu';

export default class Scene extends Component {

  constructor() {
    super()
    this.state = {
      modalVisible:false
    }
  }



  render() {

  return (
    <View style={{flex:1, alignSelf:'stretch'}}>
      <StatusBar hidden={true}/>
      <NavigatorIOS
      style={{flex: 1, alignSelf: 'stretch', backgroundColor:'red'}}
       initialRoute={{
         component: Splash,
         title: 'Splash',
         navigationBarHidden: true,
       }}
     />
 </View>
  )
  }

}
