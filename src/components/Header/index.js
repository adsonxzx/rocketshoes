import React, { Component } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HeaderContainer, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <HeaderContainer>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} />
      </Cart>
    </HeaderContainer>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
