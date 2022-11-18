import styled from "../../styles";
import React from "react";
import { Button } from "react-native";
import AuthInput from "../../components/auth/AuthInput";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../apollo-hooks/apollo-mutation";

import AuthLayout from "../../components/auth/AuthLayout";
export const Form = styled.View`
  margin-top: 20px;
`;
import { useForm, Controller } from "react-hook-form";
import { Login, LoginVariables } from "../../__generated__/Login";
import ErrorMessage from "../../components/ErrorMessage";
import { logUserIn } from "../../apollo";

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
    mode: "onChange",
  });
  const [login, { loading, data }] = useMutation<Login, LoginVariables>(LOGIN, {
    onCompleted: (data) => {
      const {
        login: { ok, token },
      } = data;
      if (ok && token) {
        logUserIn(token);
      }
    },
  });
  const LoginEvent = () => {
    if (loading) return;
    const { userName, password } = getValues();
    login({
      variables: {
        userName,
        password,
      },
    });
  };
  return (
    <AuthLayout showLogo={false}>
      <AuthInput
        placeholder="用户名"
        name="userName"
        control={control}
        rules={{ required: "用户名是必须的" }}
      />
      {errors.userName?.message && (
        <ErrorMessage message={errors.userName.message} />
      )}
      <AuthInput
        placeholder="密码"
        name="password"
        control={control}
        rules={{ required: "密码是必须的" }}
        secureTextEntry={true}
      />
      {errors.password?.message && (
        <ErrorMessage message={errors.password.message} />
      )}
      <Button
        onPress={handleSubmit(LoginEvent)}
        title="登入"
        disabled={!isValid}
      />
      {data?.login.error && <ErrorMessage message={data.login.error} />}
    </AuthLayout>
  );
};
export default LoginPage;
