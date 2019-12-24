import styled from 'styled-components';

export const ProductList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  margin-right: 40px;
  margin-bottom: 40px;

  &:nth-child(3n + 0) {
    margin-right: 0;
  }

  img {
    align-self: center;
    max-width: 250px;
  }

  > strong {
    font-size: 15px;
    color: #333;
    display: block;
  }

  > span {
    display: block;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: #7159c1;
  border-radius: 4px;
  margin-top: auto;
  transition: background 0.2s;

  &:hover {
    background: #674fb9;
  }

  div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: #fff;

    span {
      font-size: 12px;
      padding-left: 8px;
    }
  }

  p {
    flex: 1;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
`;
