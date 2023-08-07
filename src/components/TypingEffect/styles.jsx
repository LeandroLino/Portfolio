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