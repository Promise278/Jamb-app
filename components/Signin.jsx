import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Signin({ navigation }) {
  return (
    <SafeAreaView>
      <View className="p-6 bg-white w-80 h-72 rounded-2xl shadow-md mt-60 ml-5">
        <Text className="text-2xl font-bold mb-4 text-center">Sign In</Text>

        <TextInput
          className="border border-gray-300 p-3 mb-3 rounded"
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          className="border border-gray-300 p-3 mb-3 rounded"
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} className="bg-blue-600 p-3 rounded mt-2">
          <Text className="text-white text-center font-semibold">Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}