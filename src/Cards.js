import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';

const Cards = ({name, image, navigation}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}} onPress={()=>navigation.navigate('Details',{name: name})}>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 10}}
      />
      <View style={{position:'absolute',height:'100%',width:"100%"}}>
        <Text style={{color:'#fff',fontSize:28,fontWeight:'600',width:"100%",height:"100%",textAlign:'center',textAlignVertical:'center'}}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({});
