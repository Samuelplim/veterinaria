import React, { InputHTMLAttributes } from "react";
import { Input } from "./styles";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name?: string;
  alt?: string;
}
const InputPrimary: React.FC<InputProps> = (props) => {
  return <Input {...props}></Input>;
};
export default InputPrimary;
