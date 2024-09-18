import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList } from "react-native";
import OpenCard, { CardType } from "@/components/OpenCard";
import ClosedCard from "@/components/ClosedCard";
import Scanner from "@/components/Scanner";

export default function HomeScreen() {
  const data: CardType[] = [
    {
      id: "1",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "close",
    },
    {
      id: "2",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "close",
    },
    {
      id: "3",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "open",
    },
    {
      id: "4",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "close",
    },
    {
      id: "5",
      title: "cold water body freeze",
      Author: "Abhinav",
      Description:
        "putting some cold water on your head can lead to various things; see how it went out for me.",
      Status: "open",
    },
  ];

  const renderitem = ({ item }: { item: CardType }) => {
    if (item.Status === "open") {
      return <OpenCard obj={item} />;
    } else {
      return <ClosedCard obj={item} />;
    }
  };

  return (
    <SafeAreaView>
      <Text className="text-[#fdfdfd] text-2xl text-center my-4 ">Home</Text>
      <View className="w-full h-[90%] flex items-center">
        <View className="w-[90%] ">
          <FlatList
            data={data}
            renderItem={renderitem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
