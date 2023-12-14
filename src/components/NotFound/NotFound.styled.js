import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 500px;
`;

export const Nothing = styled.img`
  display: block;
  margin: 0 auto;
  box-shadow: 0px 7px 7px 7px rgba(0, 0, 0, 0.4),
    0px 7px 7px 7px rgba(0, 0, 0, 0.3), 0px 7px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const NotInlist = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;

  text-align: center;
  -webkit-text-stroke: 2px #fa47c4;

  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 900;
  color: #130ff3;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.55);
  background-color: #fc73da;

  @-webkit-keyframes pulsate {
    50% {
      color: #fff;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  @keyframes pulsate {
    50% {
      color: #fff;
      text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;
    }
  }
  color: rgb(10, 10, 10);
  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
  background: radial-gradient(rgba(243, 231, 231, 0.01), rgba(0, 0, 0, 0.01));
  -webkit-animation: pulsate 2.2s linear infinite;
  animation: pulsate 2.2s linear infinite;
`;
