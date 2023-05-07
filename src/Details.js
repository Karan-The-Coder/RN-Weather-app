import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {deviceHeight, deviceWidth} from './Dimensions';
import {API_KEY} from './Constants';

const Details = props => {
  const {name} = props.route.params;

  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.warn(err));
  }, []);

  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'gray', fontSize: 20}}>{title}</Text>
      <Text style={{color: '#fff', fontSize: 20}}>{value}</Text>
    </View>
  );

  return (
    <View>
      <ImageBackground
        source={require('./assets/images/image1.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: '#000'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 25,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={45} color="#fff" />
          <Image
            source={require('./assets/images/user.jpg')}
            style={{width: 46, height: 46, borderRadius: 50}}
          />
        </View>
        {data ? (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              height: deviceHeight - 100,
            }}>
            <View style={{}}>
              <Text style={{color: '#FFF', fontSize: 40}}>{name}</Text>
              <Text style={{color: '#FFF', fontSize: 22,textAlign:'center'}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{color: '#FFF', fontSize: 50}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
              <Text style={{color: '#fff', fontSize: 20,marginBottom:16}}>Weather Details</Text>
              <View style={{width: deviceWidth - 60}}>
                <Data title="Wind Speed" value={data['wind']['speed']} />
                <Data title="Pressure" value={data['main']['pressure']} />
                <Data title="Humidity" value={`${data['main']['humidity']}%`} />
                <Data title="Visibilty" value={data['visibility']} />
              </View> 
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
