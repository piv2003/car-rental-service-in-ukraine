import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
`;

export const Item = styled.div`
  border-radius: 6px;
  max-width: 474px;
  min-height: 426px;
  overflow: hidden;
  gap: 10px;
  background-color: white;
`;

export const ImageThumb = styled.div`
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 268px;
  object-fit: cover;
  width: 100%;
  object-position: 50% 50%;
`;
