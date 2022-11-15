import styled, { css } from "../../styles";
import React, { useState } from "react";
import { View } from "./AuthHome";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import { Alert } from "react-native";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../apollo-hooks/apollo-mutation";
import {
  RequestCode,
  RequestCodeVariables,
} from "../../__generated__/RequestCode";
export const Form = styled.View`
  margin-top: 20px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [requestCode, { loading }] = useMutation<
    RequestCode,
    RequestCodeVariables
  >(LOGIN, {
    onCompleted: (data) => {
      console.log(data);
    },
  });
  const LoginEvent = async () => {
    if (loading) return;
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "") {
      return Alert.alert("账号或密码为空!");
    } else if (!emailRegex.test(email)) {
      return Alert.alert("邮箱地址不规范!");
    }
    console.log(email);
    requestCode({
      variables: {
        email,
      },
    }).catch((data) => {
      console.log(data);
    });
  };
  return (
    <View>
      <Form>
        <AuthInput
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        {/* <AuthInput
          placeholder="Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        /> */}
        <AuthButton onPress={LoginEvent} text="登入" />
      </Form>
    </View>
  );
};
export default Login;
