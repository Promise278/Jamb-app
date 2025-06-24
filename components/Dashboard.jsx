import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-gesture-handler';

export default function Dashboard({ navigation }) {
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
            <Feather name="user" size={28} color="black" />
          </View>
        </View>

        <View className="mb-6 flex gap-4 mt-4">
          <Text className="text-3xl font-bold text-gray-800">Welcome, Promise 👋</Text>
          <Text className="text-gray-500 text-base mt-1">Here’s your JAMB dashboard</Text>
        </View>

        <View className="bg-white p-4 rounded-2xl shadow mb-6">
          <FlatList>
            <View className="bg-slate-500 h-56 w-56">
                <Text>hellow</Text>
            </View>
          </FlatList>
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

      </ScrollView>
    </SafeAreaView>
  );
}
