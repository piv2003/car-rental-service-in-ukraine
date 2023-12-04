import { HomePage, Img, LinkBoks, Title, Footer } from './Home.styled';
import background from '../../assets/carrental-80.png';

const Home = () => {
  return (
    <HomePage>
      <Title>Welcome to our car rental website!</Title>
      <Img src={background} alt="car rental" />
      <Footer>
        Here you can take a test drive and make your choice for renting a car in
        Ukraine!
      </Footer>
      <LinkBoks></LinkBoks>
    </HomePage>
  );
};

export default Home;
