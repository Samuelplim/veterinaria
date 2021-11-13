import { useHistory } from "react-router-dom";

import { ButtonPrimary } from "../../components/ButtonPrimary";
import { InputPrimary } from "../../components/InputPrimary";

import logo from "../../assets/logo.png";
import { Container, Img, Title, Link, LinkCadastro, Subtitle } from "./styles";

export function SignIn() {
  const history = useHistory();
  const handleHomeGo = () => history.push("/Home");
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
      <ButtonPrimary type="submit" children="ENTRAR" onClick={handleHomeGo} />
      <Subtitle>Ou</Subtitle>
      <LinkCadastro href="/Register">Cadastre-se</LinkCadastro>
    </Container>
  );
}
