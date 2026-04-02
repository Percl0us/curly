import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className=" items-center justify-center bg-background">
        <Text className="text-xl font-bold text-success">
          Welcome to Nativewind!
        </Text>
        <Link
          href="/Onboarding"
          className="mt-4 rounded bg-primary text-white p-4"
        >
          Go to Onboarding
        </Link>
        <Link
          href="/(auth)/Signin"
          className="mt-4 rounded w-full bg-primary text-white p-4"
        >
          Signin
        </Link>
        <Link
          href="/(auth)/Signup"
          className="mt-4 rounded bg-primary text-white p-4"
        >
          Signin
        </Link>
        <Link href="/subscriptions/spotify">Spotifu Sibcsctiptions</Link>
        <Link
          href={{
            pathname: "/subscriptions/[id]",
            params: { id: "claude" },
          }}
        >
          Cluade Max Subsctiptions
        </Link>
      </View>
    </SafeAreaView>
  );
}
