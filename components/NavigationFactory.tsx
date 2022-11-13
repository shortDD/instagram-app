import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// export default Home;
const Stack = createStackNavigator();
type Data = {
  name: string;
  component: any;
  options?: any;
};
export default ({ data }: { data: Data[] }) => {
  return (
    <Stack.Navigator >
      {data.map((item, index) => {
        if (index === 0) {
          return (
            <Stack.Screen
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
};
