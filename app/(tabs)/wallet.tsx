import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Modal from "react-native-modal";
import QRCode from "react-native-qrcode-svg";
import Scanner from "@/components/Scanner";

const wallet = () => {
  const publickey = "0x7E067106FE8197aF5f3bB2FD0aF1c736EC1373a7";
  const privatekey = "123456789";

  const router = useRouter();

  const [isDepositModalVisible, setDepositModalVisible] = useState(false);
  const [isWithdrawModalVisible, setWithdrawModalVisible] = useState(false);
  const [isBackupModalVisible, setBackupModalVisible] = useState(false);
  const [isRecoverModalVisible, setRecoverModalVisible] = useState(false);

  const toggleDepositModal = () => {
    setDepositModalVisible(!isDepositModalVisible);
  };

  const toggleWithdrawModal = () => {
    setWithdrawModalVisible(!isWithdrawModalVisible);
  };

  const toggleBackupModal = () => {
    setBackupModalVisible(!isBackupModalVisible);
  };

  const toggleRecoverModal = () => {
    setRecoverModalVisible(!isRecoverModalVisible);
  };

  return (
    <View className="w-full h-full bg-[#131212]">
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
          <Modal
            isVisible={isDepositModalVisible}
            onBackdropPress={toggleDepositModal}
          >
            <View className="w-full h-full flex justify-center items-center">
              <View className="bg-[#e5ff56] h-[45%] w-[83%] rounded-xl">
                <Text className="text-2xl font-semibold text-[#2c3111] p-3">
                  Deposit funds
                </Text>
                <View className="w-full flex items-center my-2">
                  <QRCode
                    size={200}
                    value={publickey}
                    logoBackgroundColor="transparent"
                    backgroundColor="#e5ff56"
                  />
                </View>
                <View className="w-full flex items-center justify-center pt-4">
                  <View className="w-[94%] flex flex-row justify-between items-center">
                    <Text>
                      {publickey.slice(0, 14)}....{publickey.slice(-6, -1)}
                    </Text>
                    <TouchableOpacity onPress={() => {}}>
                      <Text className="text-black">
                        <Ionicons name="copy-outline" size={20} />
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="flex w-full h-full justify-center items-center ">
                    <View className="bg-black">
                      <TouchableOpacity onPress={toggleDepositModal}>
                        <Text className="text-[#e5ff56] text-xl font-semibold ">
                          Close
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            isVisible={isWithdrawModalVisible}
            onBackdropPress={toggleWithdrawModal}
          >
            <View className="w-full h-full">
              <Scanner />
              <View className="bg-black">
                <TouchableOpacity onPress={toggleWithdrawModal}>
                  <Text className="text-[#e5ff56] text-center text-xl font-semibold ">
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
            isVisible={isBackupModalVisible}
            onBackdropPress={toggleBackupModal}
          >
            <Text>ass</Text>
          </Modal>
          <Modal
            isVisible={isRecoverModalVisible}
            onBackdropPress={toggleRecoverModal}
          >
            <Text>saas</Text>
          </Modal>
          <View className="flex items-center justify-center  h-[200px]">
            <View className="w-[90%] border bg-[#222222] border-[#635bad] h-[160px] flex flex-col justify-center items-center rounded-3xl">
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
              <TouchableOpacity onPress={toggleDepositModal}>
                <Text className="text-[#635bad]">
                  <Ionicons name="qr-code-outline" size={35} />
                </Text>
                <Text className="text-[#95969a] text-xs py-1">Deposit</Text>
              </TouchableOpacity>
            </View>
            <View className="rounded-xl bg-[#2c2d31] h-[80px] w-[80px]  p-3 flex items-center">
              <TouchableOpacity
                className="items-center"
                onPress={toggleWithdrawModal}
              >
                <Text className="text-[#635bad]">
                  <Ionicons name="arrow-up-outline" size={35} />
                </Text>
                <Text className="text-[#95969a] text-xs py-1">Widthraw</Text>
              </TouchableOpacity>
            </View>
            <View className="rounded-xl bg-[#2c2d31] h-[80px] w-[80px]  p-3 flex items-center">
              <TouchableOpacity
                className="items-center"
                onPress={toggleBackupModal}
              >
                <Text className="text-[#635bad]">
                  <Ionicons name="folder-open-outline" size={35} />
                </Text>
                <Text className="text-[#95969a] text-xs py-1">Backup</Text>
              </TouchableOpacity>
            </View>
            <View className="rounded-xl bg-[#2c2d31] h-[80px] w-[80px]  p-3 flex items-center">
              <TouchableOpacity
                className="items-center"
                onPress={toggleRecoverModal}
              >
                <Text className="text-[#635bad]">
                  <Ionicons name="construct-outline" size={35} />
                </Text>
                <Text className="text-[#95969a] text-xs py-1">Restore</Text>
              </TouchableOpacity>
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
