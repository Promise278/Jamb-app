import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import Signin from './Signin';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Signup({ navigation }) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const handleSubmit = async () => {
      if(!name || !email || !password) {
        alert("Input must not be empty")
        return
      }
      try {
        await AsyncStorage.setItem('userEmail', email);
        await AsyncStorage.setItem('userPassword', password);

        alert(`User ${name} Registered Successfully`);
        navigation.navigate('Signin');
      } catch (error) {
        alert("Error saving user data");
        console.log(error);
      }
   }

  

  return (
    <SafeAreaView>
      <View className="p-6 bg-white w-80 h-96 rounded-2xl shadow-md mt-56 ml-5">
        <Text className="text-2xl font-bold mb-4 text-center">Create Account</Text>

        <TextInput
          className="border border-gray-400 p-3 mb-3 rounded mt-4"
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="border border-gray-400 p-3 mb-3 rounded"
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="border border-gray-400 p-3 mb-3 rounded"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />


        <TouchableOpacity onPress={handleSubmit} className="bg-blue-600 p-3 rounded mt-2">
          <Text className="text-white text-center font-semibold">Create Account</Text>
        </TouchableOpacity>

        <Text className="pt-3 pl-8">Already have an Account? <Text onPress={() => navigation.navigate('Signin')} className="text-blue-600 font-bold">Sign in</Text></Text>
      </View>
    </SafeAreaView>
  )
}