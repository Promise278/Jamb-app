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

        {/* Stats Card */}
        <View className="bg-white p-4 rounded-2xl shadow mb-6">
          <Text className='text-2xl flex justify-center items-center font-bold'>Past Questions and Answers</Text>
          <View className='pt-2'>
            <Text className='text-2xl'>Physics</Text>
            <Text className='text-2xl'>Chemistry</Text>
            <Text className='text-2xl'>Mathematics</Text>
            <Text className='text-2xl'>Agriculture</Text>
            <Text className='text-2xl'>Biology</Text>
            <Text className='text-2xl'>Futher-Maths</Text>
            <Text className='text-2xl'>Crs</Text>
            <Text className='text-2xl'>Fine-Art</Text>
            <Text className='text-2xl'>Geography</Text>
            <Text className='text-2xl'>Social-Studies</Text>
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
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
