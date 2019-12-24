import React, { Component } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { HeaderContainer, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <HeaderContainer>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>3 items</span>
          </div>
          <MdShoppingBasket size={36} />
        </Cart>
      </HeaderContainer>
    );
  }
}
