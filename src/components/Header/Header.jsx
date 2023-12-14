import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  HeaderContainer,
  NavigateItem,
  NavigateLink,
  Navigation,
  PageList,
  Rollin,
} from './Header.styled';
import rollinImage from '../../assets/rolLin2.png';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Navigation>
          <Rollin src={rollinImage} alt="Rollin Xotics" />
          <PageList>
            <NavigateItem>
              <NavigateLink to="/">Home</NavigateLink>
            </NavigateItem>
            <NavigateItem>
              <NavigateLink to="/catalog">Catalog</NavigateLink>
            </NavigateItem>
            <NavigateItem>
              <NavigateLink to="/favorites">Favorites</NavigateLink>
            </NavigateItem>
          </PageList>
        </Navigation>
      </HeaderContainer>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
