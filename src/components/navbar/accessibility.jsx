import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: var(--secondary-color);
  background-image: linear-gradient(
    to right,
    transparent 0%,
    var(--primary-color) 100%
  );
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: var(--background);
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: var(--tertiary-color);
    background-color: var(--primary-color);
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <RegisterButton>Register</RegisterButton>
      <LoginButton>
        <a href="/login">Login</a>
      </LoginButton>
    </AccessibilityContainer>
  );
}
