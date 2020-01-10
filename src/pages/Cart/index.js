/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, ProductTable, Product, Footer, Button } from './styles';
import { formatPrice } from '../../util/format';
import * as cartActions from '../../store/modules/cart/action';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <Product key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>

              <td>
                <strong className="title">{product.title}</strong>
                <span className="price">{formatPrice(product.price)}</span>
              </td>

              <td>
                <div className="amount">
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={18} color="#212529" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={18} color="#212529" />
                  </button>
                </div>
              </td>
              <td>
                <span className="price">{product.subtotal}</span>
              </td>
              <td>
                <MdDelete
                  size={20}
                  onClick={() => removeFromCart(product.id)}
                />
              </td>
            </Product>
          ))}
        </tbody>
      </ProductTable>

      {/* Footer */}
      <Footer>
        <Button>Finalizar Pedido</Button>
        <div>
          <span>Total</span>
          <strong>{total}</strong>
        </div>
      </Footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
