import styled from 'styled-components'

export const Row = styled.span`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const Cursor = styled.span`
    animation: blink-caret 0.7s infinite;
    color: #fff;
    font-weight: 100;
    font-size: 110px;
    @media (max-width: 768px) {
        font-size: 80px;
    }
    @media (max-width: 500px) {
        font-size: 60px;
    }
    display: flex;
  
  @keyframes blink-caret {
    from,
    to {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }}
`;