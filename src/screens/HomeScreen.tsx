import { View, FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import Coin from "../components/Coin";
import { getMarketData } from "../Request";


export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const coinData = await getMarketData();
    setData(coinData);
    setLoading(false);
  };
 
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Coin marketCoin={item} />}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={getData}
            tintColor="white"
          />
        }
      />
    </View>
  );
}



// todo 
// 1. add Banner 

// 2. Exchange info