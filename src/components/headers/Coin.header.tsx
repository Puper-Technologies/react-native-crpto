import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function CoinHeader(){
    const navigation = useNavigation();
    return <View style={tw`flex flex-row justify-between bg-gray-300 items-center px-2 py-1`}>
        {/* logo */}
        {/* <Text>Logo</Text> */}
        <FontAwesome onPress={()=>navigation.navigate('UserScreen' as never)} name='user' size={20}/>
        <View style={tw`flex flex-row bg-gray-200 items-center rounded-lg px-2 py-1 mx-2`}>
            {/* search logo */}
            <FontAwesome name='search' color={'gray'} size={16}/>
            <TextInput style={tw`mx-1 w-24 `} placeholder='Search'></TextInput>
        </View>
    </View>
}