import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputPrimary from "../../components/InputPrimary";
import logo from "../../assets/logo.png";
import { Container, Img, Title, Link, LinkCadastro, Subtitle } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Img src={logo} alt="Logo" />
      <Title>
        Hospital Veterinário
        <br />
        Estácio da Amazônia
      </Title>
      <InputPrimary type="text" name="Login" placeholder="Login" />
      <InputPrimary type="Password" name="Senha" placeholder="*********" />
      <Link href="#">Esqueci a senha</Link>
      <ButtonPrimary type="submit" children="ENTRAR" />
      <Subtitle>Ou</Subtitle>
      <LinkCadastro href="#">Cadastre-se</LinkCadastro>
    </Container>
  );
}
