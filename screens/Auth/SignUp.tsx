import React from "react";
import AuthInput from "../../components/auth/AuthInput";
import AuthLayout from "../../components/auth/AuthLayout";
import { Button } from "react-native";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT } from "../../apollo-hooks/apollo-mutation";
import { useForm } from "react-hook-form";
import {
  CreateAccount,
  CreateAccountVariables,
} from "../../__generated__/CreateAccount";

const SignUp = ({ navigation }: { navigation: any }) => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      userName: "",
      email: "",
      password: "",
    },
  });
  const [createAccount, { loading }] = useMutation<
    CreateAccount,
    CreateAccountVariables
  >(CREATE_ACCOUNT, {
    onCompleted: (data) => {
      const {
        createAccount: { ok },
      } = data;
      if (ok) {
        navigation.navigate("Login");
      }
    },
  });

  const createAccountEvent = () => {
    if (loading) return;
    const values = getValues();
    createAccount({
      variables: {
        ...values,
      },
    });
  };
  return (
    <AuthLayout showLogo={false} showLine={true}>
      <AuthInput
        control={control}
        placeholder="姓"
        name="firstName"
        rules={{ required: "true" }}
      />
      <AuthInput control={control} placeholder="用户名" name="userName" />
      <AuthInput control={control} placeholder="邮箱" name="email" />
      <AuthInput control={control} placeholder="密码" name="password" />
      <Button
        title="注册"
        onPress={handleSubmit(createAccountEvent)}
        disabled={!isValid}
      />
    </AuthLayout>
  );
};
export default SignUp;
