import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import "../../../index.css";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../../components/cart-dropdown/cart-dropdown.component";
import { Fragment } from "react";
import { signOutStart } from "../../../store/user/user.action";

import { selectIsCartOpen } from "../../../store/cart/cart.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { MenuToggle } from "./menuToggle";

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

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

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
          )}
        </NavLinksContainer>
      </div>
      <Outlet />
    </Fragment>
  );
}
