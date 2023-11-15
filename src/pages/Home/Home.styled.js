import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  box-shadow: rgb(0 0 0) 0px 4px 6px 0px, rgba(0, 0, 0, 0.14) 0px 3px 7px 0px,
    rgba(0, 0, 0, 0.12) 0px 2px 5px -1px;
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
