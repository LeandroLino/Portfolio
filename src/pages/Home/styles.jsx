import styled from 'styled-components'

export const Container = styled.body`
    width: 100vw;
    height: 100vh;

    color: #fff;

    background-color: #141414;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export const Title = styled.span`
  color: #555;
  font-size: 1.5rem;
  font-weight: bold;

  width: 50%;
  margin: 0 0 0 20px;

  display: flex;
  align-items: center;
  >span{
    margin: 10px;
    color: #fff;
  }
`;

export const DevTitle = styled.span`
    color: #fff;
    font-size: 120px;

    font-weight: bold;
    height: 15%;

    display: flex;
    align-items: center;
`;

export const TechsTitle = styled(DevTitle)`
  width: 50%;
  color: #FCBA03;
`;