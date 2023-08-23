import { styled } from "styled-components"

function Input({ placeholder }) {
  return <InputStyled placeholder={placeholder} />
}

const InputStyled = styled.input`
  width: 39.2rem;
  height: 4.6rem;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  background-color: #fff;
  padding-left: 1.6rem;
  font-size: 1.6rem;

  &::placeholder {
    color: rgba(0,0,0, 0.25);
    font-size: 1.6rem;
  }

  &:hover,
  :focus, 
  :active {
    border: 1px solid #d9d9d9;
    border-color: #40A9FF;
  }

  &:disabled {
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
  }
`
export default Input
