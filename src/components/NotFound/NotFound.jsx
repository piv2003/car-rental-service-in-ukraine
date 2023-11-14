import errorImage from '../../images/nothing_found.gif';
import { Container, NotInlist, Nothing } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <Nothing src={errorImage} alt="Nothing in List" />
      <NotInlist>Nothing in List !</NotInlist>
    </Container>
  );
};
