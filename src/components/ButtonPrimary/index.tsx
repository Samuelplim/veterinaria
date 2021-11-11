import React, { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
}
const ButtonPrimary: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};
export default ButtonPrimary;
