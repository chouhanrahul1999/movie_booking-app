import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import "@/globals.css";
import { StatusBar } from "expo-status-bar";

// Suppress SafeAreaView deprecation warning
LogBox.ignoreLogs(['SafeAreaView has been deprecated and will be removed in a future release']);

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
        name="movies/[id]"
          options={{
            headerShown: false,
          }} />
      </Stack>
    </SafeAreaProvider>
  );
}
