import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'; 

export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-6 pt-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-row gap-4 justify-between'>
          <View>
            <Feather name="menu" size={28} color="black" />
          </View>
          <View>
            <Feather name="user" size={28} color="black" />
          </View>
        </View>
        {/* Header */}
        <View className="mb-6 flex gap-4 mt-4">
          <Text className="text-3xl font-bold text-gray-800">Welcome, Promise 👋</Text>
          <Text className="text-gray-500 text-base mt-1">Here’s your JAMB dashboard</Text>
        </View>

        {/* Stats Card */}
        <View className="bg-white p-4 rounded-2xl shadow mb-6">
          <Text className="text-gray-700 font-semibold mb-2">Your Score</Text>
          <Text className="text-4xl font-bold text-blue-600">276</Text>
          <View className="flex-row justify-between mt-4">
            <View>
              <Text className="text-gray-600">English</Text>
              <Text className="font-bold">70</Text>
            </View>
            <View>
              <Text className="text-gray-600">Maths</Text>
              <Text className="font-bold">68</Text>
            </View>
            <View>
              <Text className="text-gray-600">Physics</Text>
              <Text className="font-bold">69</Text>
            </View>
            <View>
              <Text className="text-gray-600">Chemistry</Text>
              <Text className="font-bold">69</Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View className="space-y-4">
          <TouchableOpacity className="bg-blue-600 py-4 rounded-2xl shadow">
            <Text className="text-white text-center font-semibold text-lg">Check Result</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-green-600 py-4 rounded-2xl shadow">
            <Text className="text-white text-center font-semibold text-lg">Register for Next Exam</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Signin')} className="bg-red-500 py-4 rounded-2xl shadow">
            <Text className="text-white text-center font-semibold text-lg">Logout</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
