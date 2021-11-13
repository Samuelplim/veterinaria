import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  input {
    margin-bottom: 12px;
  }
`;
export const Img = styled.img`
  height: 200px;
  width: auto;
  margin-bottom: 40px;
`;
export const Title = styled.p`
  color: var(--primary);
  margin-bottom: 80px;
`;
export const Link = styled.a`
  color: var(--text);
  font-size: 12px;
  margin-bottom: 28px;
  text-decoration: none;
`;
export const Subtitle = styled.p`
  margin-top: 36px;
  color: var(--text);
  font-size: 12px;
  margin-bottom: 20px;
`;
export const LinkCadastro = styled.a`
  color: var(--primary);
  font-size: 16px;
  margin-bottom: 28px;
  text-decoration: none;
`;
