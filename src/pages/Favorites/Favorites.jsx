import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCars } from '../../redux/selectors';
import { deleteAllFavoriteCars } from '../../redux/favoriteSlice';
import { DeleteBtn, LinkCatalog, FavoriteCanvas } from './Favorites.styled';
import { CarsList } from '../../components/CarsList/CarsList';
import { NotFound } from '../../components/NotFound/NotFound';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoritesCars);

  const handleDeleteAll = () => {
    dispatch(deleteAllFavoriteCars());
  };

  return (
    <>
      <FavoriteCanvas>
        {favoriteCars.length > 0 ? (
          <>
            <CarsList cars={favoriteCars} />
            <DeleteBtn onClick={handleDeleteAll}>
              delete all favorite cars
            </DeleteBtn>
          </>
        ) : (
          <>
            <NotFound />
            <LinkCatalog to="/catalog">Add some favorite cars</LinkCatalog>
          </>
        )}
      </FavoriteCanvas>
      <ScrollToTopButton />
    </>
  );
};

export default Favorites;
