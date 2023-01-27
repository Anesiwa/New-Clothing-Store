import React from "react";
import styled from "styled-components";
import "../../../index.css";
import { Link } from "react-router-dom";
import CartIcon from "../../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../../components/cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { Fragment } from "react";

import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LinksWrapper = styled.div`
  widht: 50%;
  display: flex;
  height: 100%;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
`;

export function NavLinks(props) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div>
        <NavLinksContainer>
          <LinksWrapper>
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
            <CartIcon />
            {isCartOpen && <CartDropDown />}
          </LinksWrapper>
        </NavLinksContainer>
      </div>
    </Fragment>
  );
}
