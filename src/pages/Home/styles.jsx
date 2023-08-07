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
  @media (max-width: 768px) {
        font-size: 1.0rem;
    }
    @media (max-width: 500px) {
        width: 60%;
    }
    @media (max-width: 400px) {
        width: 80%;
    }
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
    @media (max-width: 768px) {
        font-size: 90px;
        height: 10%;
    }
    @media (max-width: 500px) {
        font-size: 60px;
    }
    @media (max-width: 450px) {
        font-size: 50px;
    }
    font-size: 120px;

    font-weight: bold;
    height: 15%;

    display: flex;
    align-items: center;
`;

export const TechsTitle = styled(DevTitle)`
  width: 50%;
  @media (max-width: 768px) {
    width: 65%;
    }
    @media (max-width: 500px) {
        width: 70%;
    }
    @media (max-width: 380px) {
        width: 80%;
    }
  color: #FCBA03;
`;