import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: ${(props) => props.theme.shadow.low};
  color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export { Container };
