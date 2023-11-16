import { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay } from '../../components/Overlay/Overlay.styled';
import {
  Accessories,
  Age,
  CloseBtn,
  Country,
  Descr,
  Description,
  Driver,
  Functional,
  Image,
  ImageThumb,
  Item,
  MilegEPrice,
  Milege,
  ModalStyled,
  Paragraf,
  Price,
  PriceCar,
  Rental,
  Span,
  Tel,
  Title,
  User,
} from './Modal.styled';
import { numberWithSlash } from '../../helpers/numberWithSlash';

Modal.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    year: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities: PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
    fuelConsumption: PropTypes.string,
    engineSize: PropTypes.string,
    rentalConditions: PropTypes.string,
    mileage: PropTypes.number,
  }),
};
