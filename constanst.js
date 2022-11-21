import { Dimensions } from "react-native";
import Constants from "expo-constants";
const { width, height } = Dimensions.get("window");
const { height: screenHeight } = Dimensions.get("screen");
const headerHeight = 45;
const bottomTabHeight = 60;
const iconsize = {
  lg: 28,
  md: 24,
  sm: 20,
  xs: 16,
  xl: 32,
};
export { width, height, screenHeight, headerHeight, iconsize, bottomTabHeight };
