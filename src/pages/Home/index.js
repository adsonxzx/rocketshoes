import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList, Product, Button } from './styles';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <Product key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <Button>
              <div>
                <MdAddShoppingCart size={16} />
                <span>1</span>
              </div>
              <p>Adicionar ao Carrinho</p>
            </Button>
          </Product>
        ))}
      </ProductList>
    );
  }
}
