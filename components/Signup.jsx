import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';


export default function Signup() {

  return (
    <View className="p-6 bg-white w-80 h-96 rounded-2xl shadow-md">
      <Text className="text-2xl font-bold mb-4 text-center">Create Account</Text>

      <TextInput
        className="border border-gray-400 p-3 mb-3 rounded mt-4"
        placeholder="Full Name"
      />
      <TextInput
        className="border border-gray-400 p-3 mb-3 rounded"
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        className="border border-gray-400 p-3 mb-3 rounded"
        placeholder="Password"
        secureTextEntry
      />


      <TouchableOpacity className="bg-blue-600 p-3 rounded mt-2">
        <Text className="text-white text-center font-semibold">Create Account</Text>
      </TouchableOpacity>

      <Text className="pt-3 pl-8">Already have an Account <Text className="text-blue-600 font-bold">Sign in</Text></Text>
    </View>
  )
}