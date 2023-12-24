import { useState } from 'react';
import { NavigateLink } from '../Header/Header.styled.js';
import PropTypes from 'prop-types';

export const Button = ({ onClick = null }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  return (
    <NavigateLink
      type="button"
      className={Button}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Load more'}
    </NavigateLink>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
