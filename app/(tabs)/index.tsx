import "@/app/globals.css";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, View } from "react-native";


const Index = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-1 px-5" showsHorizontalScrollIndicator={false} contentContainerStyle={{minHeight: '100%', padding: 10}}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      </ScrollView>
    </View>
  );
}

export default Index;
