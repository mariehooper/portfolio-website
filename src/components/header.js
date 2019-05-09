import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/header.module.scss"

export default function Header({ pagination }) {
  return (
    <header className={styles.header}>
      <div className={styles.gridContainer}>
        <h1 className={styles.logo}>
          <Link to="/">Marie Hooper</Link>
        </h1>
        {pagination && (
          <nav className={styles.navigation}>
            <ul>
              <li>
                <Link to={pagination.previous}>
                  Previous <span>Project</span>
                </Link>
              </li>
              <li>
                <Link to={pagination.next}>
                  Next <span>Project</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
