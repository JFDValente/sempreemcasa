import styled from 'styled-components';

const Container = styled.div`
 display: flex;
 flex-direction: row;
 height: 22px;
`;

const Input = styled.input`
::-webkit-inner-spin-button{
  -webkit-appearance: none; 
}
::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}    
-moz-appearance: textfield;
width: 30px;

font-size: 13px;
text-align: center;
margin: 0 -2px;
border: 1px #CB2F2F solid;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  background-color: #CB2F2F;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  padding: 0;
  &:hover{
    background-color: #a31c1c;
  }
`;

const Signal = styled.span`
`;

export default {
  Container,
  Input,
  Button,
  Signal,
}