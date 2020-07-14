import React from "react"
import styles from "../styles/hero.module.scss"

export default function Hero() {
  return (
    <section id="hero">
      <div className={styles.description}>
        <span>Hey, I'm</span>
        <h1>Marie Hooper.</h1>
        <p className={styles.subheading}>
          I build cool things with JavaScript.
        </p>
        <p className={styles.bio}>
          I'm a front-end developer in Ann Arbor, MI with a passion for
          designing and building web applications that are accessible and
          delightful to use.
        </p>
      </div>
    </section>
  )
}
