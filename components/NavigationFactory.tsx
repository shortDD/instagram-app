import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// export default Home;
type Data = {
  name: string;
  component: any;
  options?: any;
};
function NavigationFactory(data: Data[]) {
  const Stack = createStackNavigator();
  return () => (
    <Stack.Navigator>
      {data.map((item, index) => {
        if (index === 0) {
          return (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={{ ...item.options }}
            />
          );
        } else {
          return <Stack.Screen name={item.name} component={item.component} />;
        }
      })}
    </Stack.Navigator>
  );
}
export default NavigationFactory;
