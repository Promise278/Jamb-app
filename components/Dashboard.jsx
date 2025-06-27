import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Video } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "react-native";

export default function Dashboard({ navigation }) {
 const [profileVisible, setProfileVisible] = useState(false);
  const [name, setName] = useState('');
  const data = [
    { id: '1', video: require("../assets/A_realistic_scene_i.mp4"), title: "Figure of Speech", author: "Promise", date: '17-6-2025', },
    { id: '2', video: require("../assets/A_realistic_scene_i.mp4"), title: "Essay Writing", author: "Promotex", date: '18-5-2025', },
    { id: '3', video: require("../assets/A_realistic_scene_i.mp4"), title: "Argurements", author: "Phebe", date: '13-5-2025', },
    { id: '4', video: require("../assets/A_realistic_scene_i.mp4"), title: "Narative Essay", author: "Philip", date: '7-6-2025', },
    { id: '5', video: require("../assets/A_realistic_scene_i.mp4"), title: "Qudratic Equation", author: "John", date: '1-6-2025', },
    { id: '6', video: require("../assets/A_realistic_scene_i.mp4"), title: "Quantium", author: "obi", date: '25-6-2025', }
  ]

  useEffect(() => {
    const loadName = async () => {
      const storedName = await AsyncStorage.getItem('userName');
      if (storedName) setName(storedName);
    };
    loadName();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-6 pt-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-row gap-4 justify-between'>
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Feather name="menu" size={28} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => setProfileVisible(true)}>
              <Feather name="user" size={28} color="black" />
            </TouchableOpacity>;
          </View>
        </View>

        <Modal animationType="fade" transparent={true} visible={profileVisible} onRequestClose={() => setProfileVisible(false)}>
          <TouchableOpacity className="flex-1 bg-black/30 justify-end items-end pr-6 pb-24" activeOpacity={1} onPressOut={() => setProfileVisible(false)} >
            <View className="bg-white w-48 p-4 rounded-xl shadow-lg space-y-3">
              <TouchableOpacity onPress={() => { setProfileVisible(false);  navigation.navigate("Profile"); }}>
                <Text className="text-lg text-gray-800">👤 View Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setProfileVisible(false); }}>
                <Text className="text-lg text-gray-800">⚙️ Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setProfileVisible(false);  navigation.navigate("Signin"); }}>
                <Text className="text-lg text-red-500">🚪 Logout</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>;

        <View className="mb-6 flex gap-4 mt-4">
          <Text className="text-3xl font-bold text-gray-800">Welcome, {name} 👋</Text>
          <Text className="text-gray-500 text-base mt-1">Here’s your JAMB dashboard</Text>
        </View>

        <View className="bg-white border border-gray-500 p-4 rounded-2xl h-96 shadow mb-6">
          <Text className="text-lg font-semibold mb-2 text-gray-700">Video Lessons</Text>
          <FlatList data={data} horizontal keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="mr-4 p-4 bg-blue-100 rounded-xl">
                <Video resizeMode="cover" useNativeControls shouldPlay={true} isLooping={true} source={item.video} className="w-52 h-48 rounded-lg mb-2" />
                <Text className="text-2xl font-bold text-blue-900">{item.title}</Text>
                <Text className="text-lg text-gray-600">By {item.author}</Text>
                <Text className="text-sm text-gray-400">{item.date}</Text>
              </View>
            )}
          />
        </View>

        {/* Actions */}
        <View className="space-y-4">
          <TouchableOpacity className="bg-blue-600 py-4 rounded-2xl shadow">
            <Text className="text-white text-center font-semibold text-lg">Check Result</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-600 py-4 rounded-2xl shadow">
            <Text className="text-white text-center font-semibold text-lg">Register for Next Exam</Text>
          </TouchableOpacity>
        </View>

          <View className="bg-yellow-100 p-4 rounded-2xl mb-4 mt-4 border border-yellow-300">
            <Text className="italic text-gray-700 text-center">
              “Success is no accident. It is hard work, perseverance, learning,
              and sacrifice.” – Pele
            </Text>
          </View>

          <View className="bg-white p-4 rounded-2xl shadow border border-gray-200">
            <Text className="font-semibold text-gray-800 mb-2">🎓 Study Tip</Text>
            <Text className="text-gray-600">
              Break your studies into small chunks and take regular short breaks
              to improve retention.
            </Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}