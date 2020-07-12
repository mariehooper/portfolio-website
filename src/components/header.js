import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/header.module.scss"

export default function Header() {
  function handleClick(event) {
    event.preventDefault()
    document.querySelector(event.currentTarget.hash).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <a href="#hero" onClick={handleClick}>
          Marie Hooper
        </a>
      </span>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a href="#jobs" onClick={handleClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#work" onClick={handleClick}>
              Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
