import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 40px;
  margin-top: 50px;
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
    text-transform: uppercase;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #ccc;
  }
`;

export const Product = styled.tr`
  color: #000;

  img {
    max-width: 110px;
  }

  .amount {
    display: flex;
    align-items: center;

    button {
      border: none;
      background: none;
      padding: 6px;
    }

    input {
      border: 1px solid #ddd;
      padding: 6px;
      color: #4a4a4a;
      width: 50px;
    }
  }

  .title {
    font-size: 15px;
    color: #333;
    display: block;
  }

  .price {
    display: block;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;
  }

  .total-price {
    margin: 0 15px;
  }

  svg {
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: red;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  span {
    font-size: 16px;
    color: #a9a9a9;
    font-weight: bold;
    text-transform: capitalize;
    margin-right: 10px;
  }

  strong {
    color: #333;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 20px;
  }
`;

export const Button = styled.div`
  background: #7159c1;
  padding: 12px 25px;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 4px;
`;
