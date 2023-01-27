import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "./responsive/index.jsx";
import { Fragment } from "react";
import { MobileNavLinks } from "./mobileNavLinks";
import "../../../index.css";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/crown.svg";

const NavbarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LeftSection = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const RightSection = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div>
      <Fragment>
        <NavbarContainer>
          <LeftSection>
            <Link className="logo-container" to="/">
              <Logo />
            </Link>
          </LeftSection>
          <RightSection>
            {!isMobile && <NavLinks />}
            {isMobile && <MobileNavLinks />}
          </RightSection>
        </NavbarContainer>
      </Fragment>
    </div>
  );
}
