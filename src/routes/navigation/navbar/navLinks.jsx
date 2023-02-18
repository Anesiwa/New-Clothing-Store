import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import CartIcon from "../../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

import styled from "styled-components";
import "../../../index.css";

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

export function NavLinks() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavLinksContainer>
        <LinksWrapper>
          <Link className="nav-link" to="/shop/">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
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

      <Outlet />
    </Fragment>
  );
}
