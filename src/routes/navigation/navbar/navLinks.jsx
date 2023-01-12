import React from "react";
import styled from "styled-components";
import "../../../index.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Fragment } from "react";

import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 50%;
  list-style: none;
`;

export function NavLinks(props) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

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
          </LinksWrapper>
        </NavLinksContainer>
      </div>
    </Fragment>
  );
}
