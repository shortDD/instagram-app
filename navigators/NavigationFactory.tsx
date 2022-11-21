import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import React from "react";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { headerHeight } from "../constanst";
import { MyTheme } from "../styles";
// export default Home;
type Data = {
  name: string;
  component: any;
  options?: any;
};
function NavigationFactory(data: Data[]) {
  const Stack = createStackNavigator();
  return () => {
    const { top } = useSafeAreaInsets();
    return (
      <Stack.Navigator>
        {data.map((item, index) => {
          if (index === 0) {
            return (
              <Stack.Screen
                key={index}
                name={item.name}
                component={item.component}
                options={{
                  ...item.options,
                  headerTitleAlign: "center",
                  headerStyle: {
                    borderBottomColor: "#EAEAEA",
                    borderBottomWidth: 1,
                    backgroundColor: MyTheme.lightGray,
                    height: top + headerHeight,
                  },
                }}
              />
            );
          } else {
            return <Stack.Screen name={item.name} component={item.component} />;
          }
        })}
      </Stack.Navigator>
    );
  };
}
export default NavigationFactory;
