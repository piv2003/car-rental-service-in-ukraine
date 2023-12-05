import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export const LinkCatalog = styled(Link)`
  display: flex;
  width: 200px;
  padding: 10px;
  margin-top: 24px;
  text-decoration: none;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  box-shadow: 2px 7px 5px -2px rgba(0, 0, 0, 0.3),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0b44cd;
    color: #f71e71;
    font-weight: 500;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);
  }
  &:active {
    scale: 0.95;
  }
`;
