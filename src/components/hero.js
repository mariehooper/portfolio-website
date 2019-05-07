import React from "react"
import heroImg from "../images/marie.jpg"
import styles from "../styles/hero.module.scss"

export default function Hero() {
  return (
    <section>
      <div className={styles.description}>
        <img className={styles.img} src={heroImg} alt="" />
        <p>
          Front-End Developer living in Ann Arbor, MI. Building cool things with
          JavaScript.
        </p>
      </div>
    </section>
  )
}
