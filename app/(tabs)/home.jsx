import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

import { images } from "../../constants";
// import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
// import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";
const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home