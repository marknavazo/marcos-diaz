import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: #3b8595;
  border: 0;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #000000;
  }
`;

const Logo = styled.img`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '50%')};
  width: 50%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  color: red;
  padding: 15px 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

export { Form, Input, Button, Logo, Card, Error };
