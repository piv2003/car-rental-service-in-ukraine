import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, rgb(175 238 255), pink);
`;

export const Rollin = styled.img`
  display: flex;
  justify-content: left;
  margin: 0 auto;
  height: 70px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.4),
    0px 3px 3px 3px rgba(0, 0, 0, 0.3), 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const PageList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

export const NavigateItem = styled.li`
  display: flex;
  justify-content: center;
`;

const clickEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const NavigateLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  color: #ee66d0;
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 17px;
  text-shadow: 1px 1px #000;
  line-height: normal;
  margin: 20px;
  border: 2px solid pink;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 10px, rgba(0, 0, 0, 0.12) 0px -3px 5px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 3px 5px,
    rgba(0, 0, 0, 0.09) 0px -3px 2px;
  background: radial-gradient(circle, #f1c1bc, #0c08ee);
  background-clip: padding-box;
  transition: background-image 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background: radial-gradient(circle, #80d2e6, #f1c1bc);
    color: #3232e6;
    transform: scale(1.1);
  }

  &:active {
    animation: ${clickEffect} 1.2s;
  }
`;
