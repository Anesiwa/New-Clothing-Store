import React from "react";
import styled from "styled-components";
import "./Menus.css";

const MenuShortcutsButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 16px;
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
    color: var(--tertiary-color);
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export default function MenuShortcuts(props) {
  return (
    <div className="container menuShortcuts">
      <div className="row text-center">
        <div className="col">
          <MenuShortcutsButton>
            <a href="/menus">All menus</a>
          </MenuShortcutsButton>
        </div>
        <div className="col">
          <MenuShortcutsButton>
            <a href="/menus/dinner">Dinner</a>
          </MenuShortcutsButton>
        </div>
        <div className="col">
          <MenuShortcutsButton>
            <a href="/menus/cheesecake">Cheesecake</a>
          </MenuShortcutsButton>
        </div>
        <div className="col">
          <MenuShortcutsButton>
            <a href="/menus/martinis">Martinis</a>
          </MenuShortcutsButton>
        </div>
        <div className="col">
          <MenuShortcutsButton>
            <a href="/menus/wine">Wine</a>
          </MenuShortcutsButton>
        </div>
        <div className="col">
          <MenuShortcutsButton>
            <a href="/menus/cocktails">Cocktails</a>
          </MenuShortcutsButton>
        </div>
      </div>
    </div>
  );
}
