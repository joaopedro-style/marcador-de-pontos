import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: "marcador-de-pontos",
  slug: "marcador-de-pontos",
  owner: "joaopedro07",
  scheme: "marcadorpontos",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,

  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },

  platforms: ["ios", "android"],

  ios: {
    supportsTablet: true,
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
  },

  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    package: "com.joaopedro07.marcadordepontos",
    predictiveBackGestureEnabled: false,

    config: {
      googleMaps: {
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
  },

  plugins: [
    "expo-router",
    [
      "react-native-maps",
      {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    ],
  ],

  extra: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,

    eas: {
      projectId: "f33ae0ea-8cdb-47d3-aa07-db7933b1c654",
    },
  },

  updates: {
    url: "https://u.expo.dev/f33ae0ea-8cdb-47d3-aa07-db7933b1c654",
  },

  runtimeVersion: {
    policy: "appVersion",
  },
});
