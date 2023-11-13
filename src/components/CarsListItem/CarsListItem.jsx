import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Btn,
  Descr,
  Image,
  ImageThumb,
  Item,
  Paragraf,
  Span,
  StyledHeart,
  StyledHeartIcon,
} from './CarsListItem.styled';
import { Modal } from '../../components/Modal/Modal';
import { selectFavoritesCars } from '../../redux/selectors';
import { addFavoriteCar, deleteFavoritCar } from '../../redux/favoriteSlice';
