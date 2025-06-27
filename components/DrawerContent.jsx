import React, { Component, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';


export default function Admindash({ navigation }) {
  const [showSubjects, setShowSubjects] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
      <View>
        <View className="bg-white p-4 rounded-2xl shadow mb-6 mt-12 ml-4">
          <Text className="text-gray-700 font-semibold mb-2 text-2xl">
            Your Score
          </Text>
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
        <View className="p-4 rounded-2xl shadow mb-6">
           <TouchableOpacity onPress={() => setShowSubjects(!showSubjects)}>
            <Text className="text-2xl font-bold text-center text-blue-700">
              Past Questions and Answers {showSubjects ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>
          {showSubjects && (
            <View className="pt-4 pl-2 space-y-2">
              <Text className="text-lg">📘 Physics</Text>
              <Text className="text-lg">📗 Chemistry</Text>
              <Text className="text-lg">📙 Mathematics</Text>
              <Text className="text-lg">🌾 Agriculture</Text>
              <Text className="text-lg">🧬 Biology</Text>
              <Text className="text-lg">📐 Further Maths</Text>
              <Text className="text-lg">🙏 CRK</Text>
              <Text className="text-lg">🎨 Fine Art</Text>
              <Text className="text-lg">🗺 Geography</Text>
              <Text className="text-lg">🌍 Social Studies</Text>
            </View>
          )}
        </View>

        <View className="space-y-4 ml-4">
          <TouchableOpacity className="bg-blue-600 py-4 w-48 rounded-2xl shadow">
            <Text className="text-white text-center font-semibold text-lg">
              Check Result
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-green-600 py-4 w-52 rounded-2xl shadow">
            <Text className="text-white text-center font-semibold text-lg">
              Register for Next Exam
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Signin")}
            className="bg-red-500 py-4 w-20 rounded-2xl shadow"
          >
            <Text className="text-white text-center font-semibold text-lg">
              <Feather name="log-out" size={32} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
