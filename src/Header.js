import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        {/* Three Links */}
        <div className="header__nav">
          {/* 1st Link */}
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello,</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
          {/* 2nd Link */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/* 3rd Link */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          {/* 4th Link */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/* icon */}
              <ShoppingBasketIcon className="header__shoppingBasketIcon" />
              {/* basket items */}
              <span className="header__optionLineTwo header__backetCount">
                0
              </span>
            </div>
          </Link>
        </div>
        {/* Basket icon with number */}
      </div>
    </nav>
  );
}

export default Header;
