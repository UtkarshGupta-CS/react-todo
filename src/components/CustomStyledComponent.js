import styled from "styled-components";

export const TodoInputForm = styled.div`
  display: flex;
  padding: 0.01em 16px;
  justify-content: space-around;
  align-items: center;
`;

export const TodoInput = styled.input`
  padding: 8px;
  display: block;
  border: none;
  border-bottom: 1px solid blue;
  width: 100%;
  margin: 20px;
`;

export const StyledButton = styled.button`
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: blanchedalmond;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  margin: 20px;
  width: 100px;
`;

export const Help = styled.div`
  max-width: 30%;
  background-color: blanchedalmond;
`