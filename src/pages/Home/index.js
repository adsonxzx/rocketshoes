import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList, Product, Button } from './styles';

export default function Home() {
  return (
    <ProductList>
      <Product>
        <img
          src="https://images.lojanike.com.br/290x290/produto/180462_1775262_20191029224607.png"
          alt="dr"
        />
        <strong>Tênis Nike Zoom Pegasus Turbo Shield Masculino</strong>
        <span>R$ 999,00</span>

        <Button>
          <div>
            <MdAddShoppingCart size={16} />
            <span>1</span>
          </div>
          <p>Adicionar ao Carrinho</p>
        </Button>
      </Product>

      <Product>
        <img
          src="https://images.lojanike.com.br/290x290/produto/180462_1775262_20191029224607.png"
          alt="dr"
        />
        <span className="name">
          Tênis Nike Zoom Pegasus Turbo Shield Masculino
        </span>
        <strong>R$ 999,00</strong>

        <Button>
          <div>
            <MdAddShoppingCart size={14} />
            <span>1</span>
          </div>
          <p>Adicionar ao Carrinho</p>
        </Button>
      </Product>

      <Product>
        <img
          src="https://images.lojanike.com.br/290x290/produto/180462_1775262_20191029224607.png"
          alt="dr"
        />
        <span className="name">
          Tênis Nike Zoom Pegasus Turbo Shield Masculino
        </span>
        <strong>R$ 999,00</strong>

        <Button>
          <div>
            <MdAddShoppingCart size={14} />
            <span>1</span>
          </div>
          <p>Adicionar ao Carrinho</p>
        </Button>
      </Product>
      <Product>
        <img
          src="https://images.lojanike.com.br/290x290/produto/180462_1775262_20191029224607.png"
          alt="dr"
        />
        <span className="name">
          Tênis Nike Zoom Pegasus Turbo Shield Masculino
        </span>
        <strong>R$ 999,00</strong>

        <Button>
          <div>
            <MdAddShoppingCart size={14} />
            <span>1</span>
          </div>
          <p>Adicionar ao Carrinho</p>
        </Button>
      </Product>
    </ProductList>
  );
}
