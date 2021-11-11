import styled from "styled-components";

export const Input = styled.input`
  min-height: 50px;
  width: 200px;
  border-radius: 8px;
  padding: 0 16px;
  background: #fff;
  margin-bottom: 8px;
  color: var(--primary);
  transition: border-radius 0.2s, background-color 0.2s;
  &.active,
  &:hover {
    background: #f9f9f9;
  }
`;
