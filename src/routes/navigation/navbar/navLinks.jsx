import React from "react";
import styled from "styled-components";
import "../../../index.css";
import { Link } from "react-router-dom";

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
  return (
    <div>
      <NavLinksContainer>
        <LinksWrapper>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </LinksWrapper>
      </NavLinksContainer>
    </div>
  );
}
