import styled from "styled-components";

const Empty = () => {
  return (
    <Container>
      <p>Não há registros de entrada ou saída.</p>
    </Container>
  );
};

export default Empty;

const Container = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 18px;
  color: #868686;
`;
