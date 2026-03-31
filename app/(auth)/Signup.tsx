import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Link href="/(auth)/Signin">Signin</Link>
    </View>
  );
};

export default Signup;
