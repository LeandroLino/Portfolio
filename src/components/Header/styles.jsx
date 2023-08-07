import styled from 'styled-components'

export const Header = styled.header`
    font-family: Poppins, sans-serif;

    background-color: ${(props) => (props.isScrolled ? "#111" : " #141414")};
    color: white;

    position: fixed;
    top: 0;
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Title = styled.h1`
  text-align: left;
  margin: 0 0 0 25px;
  color: #FCBA03;
`;

export const TitleH2 = styled.h2`
  font-size: 1.3em;
  margin: 5px 0 0 0;
`;

