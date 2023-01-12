import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  // TouchableOpacity,
  TouchableOpacity
} from "react-native";
import React, { Suspense, useContext } from "react";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import UserAssestItem from "../components/UserAssestItem";
import { useRecoilState } from "recoil";
import { userAsset } from "../atom/UserAssets";
import AssetModal from "../components/AssetModal";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { authContext } from "../contexts/auth.context";
import { UserType } from "../@types/user.type";

const UserScreen = () => {
  const [asset, setAsset] = useRecoilState(userAsset);
  const navigation = useNavigation();
  const {user} = useContext(authContext) as UserType;
  return (
    <Suspense fallback={<ActivityIndicator size="large" style={tw`mt-24`} />}>
      <View style={tw`px-4 py-2`}>
        <View>
          <Text style={tw`text-2xl text-white font-semibold`}>Welcome to XYZ</Text>
          {/* description */}
          <Text style={tw`text-sm text-white`}>Join the world's largest crypto exchange</Text>
        </View>
        {/* signup and login button */}
        { !user && <View style={tw`flex flex-row mt-2`}>
          <TouchableOpacity onPress={() => navigation.navigate('Login' as never)} style={tw`bg-yellow-500 rounded-md shadow-md mt-2 flex-1 mr-1`}>
            <Text
              style={tw`text-white p-2 text-center font-semibold text-base `}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp' as never)} style={tw`bg-gray-500 rounded-md shadow-md mt-2 flex-1 ml-1`}>
            <Text
              style={tw`text-white p-2 text-center font-semibold text-base `}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>}
        <View style={tw`mt-3`}>
          <TouchableOpacity style={tw`flex flex-row items-center bg-gray-800 mt-1 py-2 px-1 shadow-md rounded-md`}>
            <Fontisto name="player-settings" color={'gray'} size={21} />
            <Text style={tw`text-xl text-white ml-2`}> Settings </Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row items-center bg-gray-800 mt-1 py-2 px-1 shadow-md rounded-md`}>
            <FontAwesome name="support" color={'gray'} size={21} />
            <Text style={tw`text-xl text-white ml-2`}> Help & Support </Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row items-center bg-gray-800 mt-1 py-2 px-1 shadow-md rounded-md`}>
            <FontAwesome name="share-alt" color={'gray'} size={21} />
            <Text style={tw`text-xl text-white ml-2`}> Share The App </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Suspense>
  );
};

export default UserScreen;
