import errorImage from '../../assets/notFound.gif';
import { Container, NotInlist, Nothing } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <Nothing src={errorImage} alt="Nothing in List" />
      <NotInlist>There's nothing on the List !</NotInlist>
    </Container>
  );
};
