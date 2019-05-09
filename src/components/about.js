import React from "react"
import resume from "../docs/marie-hooper-resume.pdf"
import styles from "../styles/about.module.scss"

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.sectionHeader}>About</h2>
      <div className={styles.wrapper}>
        <p>
          I am a Front End Engineer at{" "}
          <a
            href="https://www.ithaka.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ITHAKA
          </a>{" "}
          where I work on web applications for researchers, teachers and
          students.
        </p>
        <p>
          When I am not glued to a MacBook screen, you can find me biking,
          hiking, playing rec sports, or watching college football. If you'd
          like to know more about my experiences or what I am currently working
          on, look for me on{" "}
          <a
            href="https://github.com/mariehooper"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          or check out my{" "}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            resume
          </a>
          !
        </p>
      </div>
    </section>
  )
}
