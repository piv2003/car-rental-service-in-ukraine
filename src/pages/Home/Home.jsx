import { ButtonLink, HomePage, Img, LinkBoks, Title } from './Home.styled';
import background from '../../assets/carrental.png';

const Home = () => {
  return (
    <HomePage>
      <Title>Welcome to our car rental website!</Title>
      <Img src={background} alt="car rental" />
      <h2>
        Here you can take a test drive and make your choice for renting a car in
        Ukraine!
      </h2>
      <LinkBoks>
        <ButtonLink to="/catalog">Go to our Catalog =></ButtonLink>
      </LinkBoks>
    </HomePage>
  );
};

export default Home;
