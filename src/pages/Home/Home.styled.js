import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../../assets/avto.png';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100 %;
  height: 100vh;
  overflow: hidden;
  box-shadow: rgb(0 0 0) 0px 4px 6px 0px, rgba(0, 0, 0, 0.14) 0px 3px 7px 0px,
    rgba(0, 0, 0, 0.14) 0px 2px 5px -1px;
`;

export const Footer = styled.h2`
  display: table;
  margin: 10px auto;
  font-family: 'Roboto Slab';
  font-weight: 18;
  font-size: 30px;
  text-shadow: 2px 2px 1px #9ccbf8;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  -webkit-text-stroke: 2px #fa47c4;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 35px;
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

export const LinkBoks = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;

export const Img = styled.img`
  display: block;
  width: 1000px;
  height: 600px;
  margin: 0;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  align-items: center;
  width: 180px;
  min-height: 20px;
  padding: 10px;
  gap: 30px;
  color: yellow;
  background-color: #3470ff;
  border: 1px solid #3470ff;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &.active {
    background-color: #afffff;
    color: #000000;
  }
  &:hover {
    scale: 1.1;
    color: red;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
`;
