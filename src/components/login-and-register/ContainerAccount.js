import styled from 'styled-components';

const Container = styled.div`
  width: 87vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.h1`
  color: white;
  font-size: 32px;
  margin-bottom: 26px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const P = styled.p`
  color: white;
  font-size: 15px;
  margin-top: 36px;
  font-weight: bold;
`;

export { Container, Logo, Form, P };
