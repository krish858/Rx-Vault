import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Modal from "react-native-modal";

const wallet = () => {
  const publickey = "0x7E067106FE8197aF5f3bB2FD0aF1c736EC1373a7";
  const router = useRouter();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View className="w-full h-full bg-[#222222]">
      <SafeAreaView>
        <View className="w-full flex flex-row items-center py-1 bg-[#2c2d31]">
          <View className="px-2 text-[#f0f1f2] ">
            <TouchableOpacity
              onPress={() => {
                router.push("/(tabs)/dashboard");
              }}
            >
              <Text className="px-2 text-[#f0f1f2] ">
                <Ionicons name="arrow-back-outline" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[#f0f1f2] text-[17px] font-semibold py-3">
            Wallet
          </Text>
        </View>
        <View className="w-full h-full">
          <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
            <View>
              <Text className="text-white">ass</Text>
            </View>
          </Modal>
          <View className="flex items-center justify-center  h-[200px]">
            <View className="w-[90%] border border-[#a9a1d7] h-[160px] flex flex-col justify-center items-center rounded-3xl">
              <View>
                <Text className="text-[#fdfdfd] text-center text-5xl mx-2 font-semibold">
                  76780 ETH
                </Text>
                <Text className="text-center text-[#898989] text-xl">
                  $10000000.0
                </Text>
              </View>
            </View>
          </View>
          <View className="w-full flex flex-row justify-evenly items-center">
            <View className="rounded-2xl h-[80px] w-[80px] bg-[#2c2d31] p-3 flex items-center">
              <TouchableOpacity onPress={toggleModal}>
                <Text className="text-[#a9a1d7]">
                  <Ionicons name="qr-code-outline" size={35} />
                </Text>
                <Text className="text-[#95969a] text-xs py-1">Deposit</Text>
              </TouchableOpacity>
            </View>
            <View className="rounded-xl bg-[#2c2d31] h-[80px] w-[80px]  p-3 flex items-center">
              <Text className="text-[#a9a1d7]">
                <Ionicons name="arrow-up-outline" size={35} />
              </Text>
              <Text className="text-[#95969a] text-xs py-1">Widthraw</Text>
            </View>
            <View className="rounded-xl bg-[#2c2d31] h-[80px] w-[80px]  p-3 flex items-center">
              <Text className="text-[#a9a1d7]">
                <Ionicons name="folder-open-outline" size={35} />
              </Text>
              <Text className="text-[#95969a] text-xs py-1">Backup</Text>
            </View>
            <View className="rounded-xl bg-[#2c2d31] h-[80px] w-[80px]  p-3 flex items-center">
              <Text className="text-[#a9a1d7]">
                <Ionicons name="construct-outline" size={35} />
              </Text>
              <Text className="text-[#95969a] text-xs py-1">Recieve</Text>
            </View>
          </View>
          <View className="w-full h-[160px] flex justify-center items-center">
            <View className="w-[90%] h-[96px]">
              <Text className="text-lg text-[#808080] font-semibold">
                Wallet Details
              </Text>
              <View className="bg-[#2c2d31] mt-2 rounded-xl">
                <View className="p-3 border-b border-[#222222]">
                  <Text className="text-lg font-semibold text-white ">
                    Wallet Address
                  </Text>
                </View>
                <View className="p-3 flex flex-row items-center justify-between py-5">
                  <Text className="text-base font- text-[#ede59c]">
                    {publickey.slice(0, 14)}....{publickey.slice(-6, -1)}
                  </Text>
                  <TouchableOpacity onPress={() => {}}>
                    <Text className="text-white">
                      <Ionicons name="copy-outline" size={20} />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View className="w-full h-[160px] flex justify-center mt-2 items-center">
            <View className="w-[90%] h-[96px]">
              <Text className="text-lg text-[#808080] font-semibold">
                About Ethereium
              </Text>
              <View className="bg-[#2c2d31] mt-2 rounded-xl">
                <View className="p-3 border-b flex flex-row items-center justify-between border-[#222222]">
                  <Text className="text-lg text-[#808080]">Token Name</Text>
                  <Text className="text-lg text-white font-semibold">
                    Ethereum (ETH)
                  </Text>
                </View>
                <View className="p-3 border-b flex flex-row items-center justify-between ">
                  <Text className="text-lg text-[#808080]">test</Text>
                  <Text className=" text-lg text-white font-semibold">
                    Ethereum
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default wallet;
