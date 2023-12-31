import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/operations';
import {
  selectAmountCars,
  selectFilteredCars,
  selectLoading,
} from '../../redux/selectors';
import { CatalogPage } from './Catalog.styled';
import { clearCarsList } from '../../redux/carSlice';
import { clearFilter } from '../../redux/filterSlice';
import { CarsList } from '../../components/CarsList/CarsList';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Button } from '../../components/Button/Button';
import { NotFound } from '../../components/NotFound/NotFound';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const amount = useSelector(selectAmountCars);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (page === 1) {
      dispatch(clearCarsList());
      dispatch(clearFilter());
    }

    dispatch(fetchCars({ page, limit: 8 }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  return (
    <>
      <CatalogPage>
        <SearchForm />
        {filteredCars.length > 0 && <CarsList cars={filteredCars} />}
        {filteredCars.length === 0 && !isLoading && <NotFound />}
        {amount < 32 && <Button onClick={handleLoadMore} />}
      </CatalogPage>
      <ScrollToTopButton />
    </>
  );
};

export default Catalog;
