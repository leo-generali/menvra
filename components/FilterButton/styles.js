import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  padding: 4rem 0 2rem;
  background-color: papayawhip;
  width: 10rem;
  font-size: 1.6rem;
  box-shadow: ${(props) => props.theme.shadow.low};
  transition: ${(props) => props.theme.transition.quick};
  margin-bottom: 1rem;

  :hover {
    box-shadow: ${(props) => props.theme.shadow.mid};
    transform: translateY(-0.3rem);
  }

  span {
    background: #ffffff;
    width: 100%;
    display: block;
    padding: 0.5rem 0 0.5rem 1rem;
    text-align: left;
  }
`;

export { Button };
