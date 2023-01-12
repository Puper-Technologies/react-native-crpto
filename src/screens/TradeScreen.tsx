import * as React from "react";
import { View, TextInput, Pressable, RefreshControl, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

import { LineChart } from 'react-native-wagmi-charts';

const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
];

const TradeScreen = () => {

  return (
    <View>
      {/* Coin Exchange ex: BTC/BUSD in header */}
      <View key="1"  style={tw`flex flex-row bg-gray-800 px-4 py-2`}>
        <Text style={tw`text-gray-100 text-lg font-semibold`}>{`BTC/BUSD`}</Text>
      </View>

      <View key="2" style={tw`flex flex-row p-3`}>
        <View key="1" style={tw`flex-1`}>
          {/* buying inputs left */}
          <TextInput
            style={tw`bg-gray-700 text-gray-100 py-1 px-1 rounded-sm shadow-md mt-0.5`}
            placeholder=""
            value={"16667.32"}
            textAlign="center"
            keyboardType="numeric"
          />
          <TextInput
            style={tw`bg-gray-700 text-gray-100 py-1 px-1 rounded-sm shadow-md mt-0.5`}
            placeholder="Amount(BTC)"
            textAlign="center"
            keyboardType="numeric"
          />
          <TextInput
            style={tw`bg-gray-700 text-gray-100 py-1 px-1 rounded-sm shadow-md mt-0.5`}
            placeholder="Total(USDT)"
            textAlign="center"
            keyboardType="numeric"
          />
          <Pressable style={tw`bg-green-300 rounded-md shadow-md mt-2 ml-1`}>
            <Text
              style={tw`text-gray-100 p-2 text-center font-semibold text-base`}
            >
              Buy
            </Text>
          </Pressable>
        </View>
        <View key="2" style={tw`flex-1`}>
          {/* listing of the trade price */}
        </View>
      </View>

      <View key="3">
        {/* Trade price display right */}
        {/* <LineChart.Provider data={data}>
          <LineChart>
            <LineChart.Path color="hotpink" />
            <LineChart.CursorLine />
          </LineChart>
        </LineChart.Provider> */}
      </View>
    </View>
  );
};

export default TradeScreen;
