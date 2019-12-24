import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    margin-right: 15px;
    text-align: right;
  }
  strong {
    display: block;
    font-weight: bold;
    font-size: 16px;
  }

  span {
    font-size: 12px;
    color: #fa5400;
  }
`;
