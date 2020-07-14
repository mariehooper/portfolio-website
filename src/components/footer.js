import React from "react"
import styles from "../styles/footer.module.scss"
import {
  GithubIcon,
  GitlabIcon,
  EmailIcon,
  LinkedInIcon,
  InstagramIcon,
  HeartIcon,
} from "./icons"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li>
          <a
            href="https://github.com/mariehooper"
            target="_blank"
            rel="noopener noreferrer"
          >
            {GithubIcon(styles.icon)}
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com/mariehooper"
            target="_blank"
            rel="noopener noreferrer"
          >
            {GitlabIcon(styles.icon)}
          </a>
        </li>
        <li>
          <a
            href="mailto:marie.ashtari@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {EmailIcon(styles.icon)}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/marie-hooper-2b83b342"
            target="_blank"
            rel="noopener noreferrer"
          >
            {LinkedInIcon(styles.icon)}
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/jahletti"
            target="_blank"
            rel="noopener noreferrer"
          >
            {InstagramIcon(styles.icon)}
          </a>
        </li>
      </ul>
      <p>
        © {new Date().getFullYear()}
        {` `} by Marie Hooper. Made with{` `}
        {HeartIcon(styles.icon)}
        {` `}and <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </footer>
  )
}
