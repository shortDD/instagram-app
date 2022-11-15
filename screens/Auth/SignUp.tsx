import React from "react";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import Logo from "../../components/Logo";
import { View } from "./AuthHome";
import { Form } from "./LogIn";
const SignUp = () => {
  return (
    <View>
      <Logo />
      <Form>
        <AuthInput placeholder="用户名" />
        <AuthInput placeholder="邮箱" />
        <AuthInput placeholder="密码" />
        <AuthButton text="注册" onPress={() => {}} />
      </Form>
    </View>
  );
};
export default SignUp;
