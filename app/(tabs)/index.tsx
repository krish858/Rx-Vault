import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import Buttons from "@/components/Buttons";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className="text-[#fdfdfd] text-2xl text-center my-4 ">Home</Text>
      <View className="w-full h-full bg-red-300">
        <View className="w-full ">
          <Buttons />
        </View>
      </View>
    </SafeAreaView>
  );
}
