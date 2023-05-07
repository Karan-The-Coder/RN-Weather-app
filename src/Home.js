import { StyleSheet, Text, View,ImageBackground,FlatList,StatusBar,TouchableOpacity,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'
import Cards from './Cards'

const Home = (props) => {
    const [city, setCity] = useState('');
    const cities = [
        {
            name: 'New Delhi',
            image: require('./assets/images/image3.jpg'),
        },
        {
            name: 'New York',
            image: require('./assets/images/image4.jpg'),
        },
        {
            name: 'London',
            image: require('./assets/images/image5.jpg'),
        },
        {
            name: 'San Francisco',
            image: require('./assets/images/image6.jpg'),
        },
        {
            name: 'New Jersey',
            image: require('./assets/images/image7.jpg'),
        },
    ];
  return (
    <View style={{}}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground
        source={require('./assets/images/image2.jpg')}
        style={{height: deviceHeight,width:deviceWidth}}
        imageStyle={{opacity:0.6,backgroundColor:'#000'}}
      />
        <View style={{position:'absolute',paddingVertical:25,paddingHorizontal:10,}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width: deviceWidth-20}}>
                <Icon name="menu" size={45} color="#fff"  />
                <Image 
                source={require('./assets/images/user.jpg')} 
                style={{width:46,height:46, borderRadius:50 }} />
            </View>

            <View style={{marginTop:100,paddingHorizontal:20}}>
                <Text style={{fontSize: 44,color:'#fff'}} >Hello, Karan</Text>
                <Text style={{fontSize: 24,color:'#fff'}}>Search the city by the name</Text>

                <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row', borderRadius:50,borderWidth:1, borderColor:'#fff',paddingHorizontal:10,marginTop:15}}>
                    <TextInput 
                    value={city}
                    onChangeText={(value)=>setCity(value)}
                    placeholder='Search City'  placeholderTextColor='#fff' style={{paddingHorizontal:10, color:'#fff',fontSize:16}} />
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Details', {name: city})} >
                        <Icon name="search" size={22} color="#fff" />
                    </TouchableOpacity>
                </View>

                <Text style={{color:'#fff',paddingHorizontal:10,fontSize:22,marginTop:150,marginBottom:20}}>My Locations</Text>

                <FlatList
                    horizontal
                    data={cities}
                    renderItem={({item})=>(
                        <Cards name={item.name} image={item.image} navigation={props.navigation} />
                    )}
                />
            </View>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})