import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Admindash ({ navigation }) {
    return (
        <SafeAreaView>
        <View>
            <View className="bg-white p-4 rounded-2xl shadow mb-6 mt-12 ml-4">
                <Text className="text-gray-700 font-semibold mb-2 text-2xl">Your Score</Text>
                <Text className="text-4xl font-bold text-blue-600">276</Text>
                <View className="flex-row justify-between mt-4 mr-4">
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
        
            <View className="space-y-4 ml-4">
              <TouchableOpacity className="bg-blue-600 py-4 w-48 rounded-2xl shadow">
                <Text className="text-white text-center font-semibold text-lg">Check Result</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-green-600 py-4 w-52 rounded-2xl shadow">
                <Text className="text-white text-center font-semibold text-lg">Register for Next Exam</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Signin')} className="bg-red-500 py-4 w-48 rounded-2xl shadow">
                <Text className="text-white text-center font-semibold text-lg">Logout</Text>
              </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}