import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Button
} from 'react-native';


class LoginScreen extends React.Component {

  static navigationOptions = {

    title : 'HangOut',
    headerStyle: { backgroundColor: '#DDDDDD' },

    headerTitleStyle: { color: 'green' }, 
  }

  render(){
    
    var {navigate} = this.props.navigation;
    return(
      <View style = {{flex:1, backgroundColor:'#2F4F4F'}}>
        <View
        style={{flex:1}}>

          <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{height: 140, width: 140, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontWeight: 'bold', fontSize:32}}> MeetUp </Text>

            </View>

          </View>

          <View>
            <View style={{
              height:70,
              backgroundColor:'white',
              justifyContent:'center',

            }}>

            <TouchableOpacity style={{backgroundColor:'#DDDDDD', height:70, alignItems:'center'}}
              onPress={
                () => navigate("second", {})

              }>
               <Text style={{fontSize:28}}>Click To Find Nearby People
                
              </Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </View>
    );
  }
}
      

export default LoginScreen;


const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});