import { Dimensions } from "react-native";
import Constants from "expo-constants";
const { width, height } = Dimensions.get("window");
const { height: screenheight } = Dimensions.get("screen");
const centerScreenHight = height - Constants.statusBarHeight - 45;
export { width, height, centerScreenHight };
