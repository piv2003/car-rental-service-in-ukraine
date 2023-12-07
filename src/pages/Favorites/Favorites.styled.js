import styled from 'styled-components';
import Image from '../../assets/avto2.jpg';

export const FavoriteCanvas = styled.div`
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
    rgba(0, 0, 0, 0.12) 0px 2px 5px -1px;
`;

export const DeleteBtn = styled.button`
  display: block;
  margin: 20px auto;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: #6c92fc;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #0a0a0a;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  max-width: 360px;
  font-weight: 700;
  box-shadow: 2px 7px 5px -2px rgba(0, 0, 0, 0.3),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #4b2df5;
    font-weight: 500;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
    color: #d40303;
  }
  &:active {
    scale: 0.95;
  }
`;
