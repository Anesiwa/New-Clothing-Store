import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DropdownMenu.css";

export default function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="./"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-tensils" />}
            rightIcon={<FontAwesomeIcon icon="fa-solid fa-chevron-right" />}
            goToMenu="menus"
          >
            Menus
          </DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-bell-concierge" />}
            rightIcon={<FontAwesomeIcon icon="fa-solid fa-chevron-right" />}
            goToMenu="special-events"
          >
            Special Events
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "menus"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menus">
          <DropdownItem
            goToMenu="main"
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-chevron-left" />}
          >
            <h2>Menus</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-utensils" />}
          >
            Dinner Menu
          </DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-wine-glass" />}
          >
            Wine Menu
          </DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-cheese" />}
          >
            Homemade Cheesecake Menu
          </DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-martini-glass" />}
          >
            Martini Menu
          </DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-whiskey-glass" />}
          >
            Seasonal Drink Menu
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "special-events"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            goToMenu="main"
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-chevron-left" />}
          >
            <h2>Special Events</h2>
          </DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-chevron-left" />}
          >
            Wine Dinners
          </DropdownItem>
          <DropdownItem
            leftIcon={<FontAwesomeIcon icon="fa-solid fa-bell-concierge" />}
          >
            Catering and Banquets
          </DropdownItem>
          <DropdownItem leftIcon="🦋">Russ Raymen on the keys</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
