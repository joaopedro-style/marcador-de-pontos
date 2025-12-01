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
  userInterfaceStyle: "automatic",
  newArchEnabled: true,

  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },

  platforms: ["ios", "android"],

  ios: {
    supportsTablet: true,
  },

  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    package: "com.joaopedro07.marcadordepontos",
  },

  plugins: ["expo-router"],

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
