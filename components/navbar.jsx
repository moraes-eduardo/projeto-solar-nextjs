import styles from '../styles/Navbar.module.css'
import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
// import Link from 'next/link'
import { 
  BellIcon,
  MessengerIcon,
  CaretIcon,
  PlusIcon,
  CogIcon,
  ChevronIcon,
  ArrowIcon,
  BoltIcon
} from "./icones"

function Navbar() {
  return (
    <Nav>
      <NavItem icon={PlusIcon} />
      <NavItem icon={BellIcon} />
      <NavItem icon={MessengerIcon} />
      <NavItem icon={CaretIcon} >
        <DropdownMenu1></DropdownMenu1>
      </NavItem>
      <NavItem icon={CaretIcon} >
        <DropdownMenu5></DropdownMenu5>
      </NavItem>
    </Nav>
  );
}

function Nav(props) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_ul}>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navbar_item}>
      <a className={styles.icon_button} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu1() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem(props) {
    return (
      <a className={styles.menu_item} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className={styles.icon_button}>{props.leftIcon}</span>
        {props.children}
        <span className={styles.icon_right}>{props.rightIcon}</span>
      </a>
    )
  }

  return (

    <div className={styles.dropdown} style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        className={styles.menu_primary}
        unmountOnExit
        onEnter={calcHeight}>
        <div className={styles.menu}>
          <DropdownItem>Projetos</DropdownItem>
          <DropdownItem
            leftIcon={CogIcon}
            rightIcon={ChevronIcon}
            goToMenu="projetos">
            React
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={ChevronIcon}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'projetos'}
        timeout={500}
        className={styles.menu_secondary}
        unmountOnExit
        onEnter={calcHeight}>
        <div className={styles.menu}>
          <DropdownItem goToMenu="main" leftIcon={ArrowIcon}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>HTML</DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>CSS</DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        className={styles.menu_secondary}
        unmountOnExit
        onEnter={calcHeight}>
        <div className={styles.menu}>
          <DropdownItem goToMenu="main" leftIcon={ArrowIcon}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function DropdownMenu5() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  function DropdownItem(props) {
    return (
      <a className={styles.menu_item} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className={styles.icon_button}>{props.leftIcon}</span>
        {props.children}
        <span className={styles.icon_right}>{props.rightIcon}</span>
      </a>
    )
  }

  return (

    <div className={styles.dropdown} style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        className={styles.menu_primary}
        unmountOnExit
        onEnter={calcHeight}>
        <div className={styles.menu}>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={CogIcon}
            rightIcon={ChevronIcon}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={ChevronIcon}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        className={styles.menu_secondary}
        unmountOnExit
        onEnter={calcHeight}>
        <div className={styles.menu}>
          <DropdownItem goToMenu="main" leftIcon={ArrowIcon}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>HTML</DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>CSS</DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        className={styles.menu_secondary}
        unmountOnExit
        onEnter={calcHeight}>
        <div className={styles.menu}>
          <DropdownItem goToMenu="main" leftIcon={ArrowIcon}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Navbar
