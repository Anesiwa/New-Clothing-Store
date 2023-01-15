import React, { useState } from "react";
import styled from "styled-components";
import "../../../index.css";
import { Link } from "react-router-dom";
import CartIcon from "../../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../../components/cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { Fragment } from "react";

import { MenuToggle } from "./menuToggle";

import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

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
          <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
          {isOpen && (
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
          )}
        </NavLinksContainer>
      </div>
    </Fragment>
  );
}
