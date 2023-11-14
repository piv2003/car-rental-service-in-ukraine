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
import { ScrollToTop } from '../../components/ScrollToTop/ScrollToTop';

const Catalog = () => {
  return (
    <>
      <CatalogPage>
        <SearchForm />
      </CatalogPage>
      <ScrollToTop />
    </>
  );
};

export default Catalog;
