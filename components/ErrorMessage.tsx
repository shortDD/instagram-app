import styled from "../styles";
import React from "react";
const Message = styled.Text`
  color: red;
  margin-bottom: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;
const ErrorMessage = ({ message }: { message: string }) => {
  return <Message>{message}</Message>;
};

export default ErrorMessage;
