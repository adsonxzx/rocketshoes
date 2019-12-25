/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { Container, ProductTable, Product, Footer, Button } from './styles';

export default function Cart() {
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
          <Product>
            <td>
              <img
                src="https://images.lojanike.com.br/290x290/produto/180462_1775262_20191029224607.png"
                alt="dr"
              />
            </td>

            <td>
              <strong className="title">
                Tênis Nike Zoom Pegasus Turbo Shield Masculino
              </strong>
              <span className="price">R$ 999,00</span>
            </td>

            <td>
              <div className="amount">
                <button type="button">
                  <MdRemoveCircleOutline size={18} color="#212529" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={18} color="#212529" />
                </button>
              </div>
            </td>
            <td>
              <span className="price"> R$ 999,00 </span>
            </td>
            <td>
              <MdDelete size={20} />
            </td>
          </Product>

          <Product>
            <td>
              <img
                src="https://images.lojanike.com.br/290x290/produto/180462_1775262_20191029224607.png"
                alt="dr"
              />
            </td>

            <td>
              <strong className="title">
                Tênis Nike Zoom Pegasus Turbo Shield Masculino
              </strong>
              <span className="price">R$ 999,00</span>
            </td>

            <td>
              <div className="amount">
                <button type="button">
                  <MdRemoveCircleOutline size={18} color="#212529" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={18} color="#212529" />
                </button>
              </div>
            </td>
            <td>
              <span className="price"> R$ 999,00 </span>
            </td>
            <td>
              <MdDelete size={20} />
            </td>
          </Product>
        </tbody>
      </ProductTable>

      {/* Footer */}
      <Footer>
        <Button>Finalizar Pedido</Button>
        <div>
          <span>Total</span>
          <strong>R$1977,00</strong>
        </div>
      </Footer>
    </Container>
  );
}
