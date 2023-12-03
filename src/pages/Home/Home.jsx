import {
  ButtonLink,
  HomePage,
  Img,
  LinkBoks,
  Title,
  Footer,
} from './Home.styled';
import background from '../../assets/carrental.png';

const Home = () => {
  return (
    <HomePage>
      <Title>Welcome to our car rental website!</Title>
      <Img src={background} alt="car rental" />
      <Footer>
        Here you can take a test drive and make your choice for renting a car in
        Ukraine!
      </Footer>
      <LinkBoks>
        <ButtonLink to="/catalog">Go to our Catalog =></ButtonLink>
      </LinkBoks>
    </HomePage>
  );
};

export default Home;
