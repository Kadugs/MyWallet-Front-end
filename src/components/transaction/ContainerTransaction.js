import styled from 'styled-components';

const Container = styled.div`
  width: 87vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .back-button {
    margin-top: 20px;
    color: white;
    font-size: 22px;
  }
`;
const Header = styled.p`
  margin-top: 25px;
  margin-bottom: 40px;
  font-size: 26px;
  color: white;
  font-weight: bold;
`;

export { Container, Header };
