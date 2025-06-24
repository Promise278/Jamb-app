import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

export default function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
        alert("Login Success", `Welcome back!`);
        navigation.navigate('Dashboard');
      } else {
        alert("Login Failed", "Invalid email or password");
      }
    } catch (error) {
      alert("Error", "Something went wrong");
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <View className="p-6 bg-white w-80 h-72 rounded-2xl shadow-md mt-60 ml-5">
        <Text className="text-2xl font-bold mb-4 text-center">Sign In</Text>

        <TextInput
          className="border border-gray-300 p-3 mb-3 rounded"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className="border border-gray-300 p-3 mb-3 rounded"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleLogin} className="bg-blue-600 p-3 rounded mt-2">
          <Text className="text-white text-center font-semibold">Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}