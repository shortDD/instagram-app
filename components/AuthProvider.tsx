import React, { createContext, useContext, useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

export const AuthContext = createContext<null | any>(null);
interface IProps {
  isLoggedInInitialValue: any;
  children: any;
}
export const AuthProvider: React.FC<IProps> = ({
  isLoggedInInitialValue,
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isLoggedInInitialValue);
  const loginUserIn = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } catch (e) {
      console.log("loginInError", e);
    }
  };
  const loginUserOut = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
    } catch (e) {
      console.log("loginInError", e);
    }
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, loginUserIn, loginUserOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useIsLoggedInt = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};
export const useLogIn = () => {
  const { loginUserIn } = useContext(AuthContext);
  return loginUserIn;
};
export const useLogOut = () => {
  const { loginUserOut } = useContext(AuthContext);
  return loginUserOut;
};
