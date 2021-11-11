import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputPrimary from "../../components/InputPrimary";

import { Container } from "./styles";
export function Register() {
  return (
    <Container>
      <InputPrimary type="Text" name="Nome" placeholder="Nome" />
      <InputPrimary type="Text" name="Login" placeholder="Login" />
      <InputPrimary type="Password" name="Senha" placeholder="Senha" />
      <ButtonPrimary type="submit" children="CADASTRAR" />
    </Container>
  );
}
