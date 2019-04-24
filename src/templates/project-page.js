import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import styles from "../styles/projectpage.module.scss"

export default function ProjectPage({ data, pageContext }) {
  const project = data.projectsJson
  return (
    <Layout
      pagination={{ next: pageContext.next, previous: pageContext.previous }}
    >
      <div className={styles.projectSectionHeader}>
        <div className={styles.flexWrapper}>
          <div className={styles.sectionHeaderCol}>
            <h1 className={styles.name}>{project.name}</h1>
            <ul className={styles.tech}>
              {project.tech.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.overview}>{project.overview}</p>
            <div className={styles.buttonBlock}>
              {project.live_site && (
                <a
                  className="button"
                  href={project.live_site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Site
                </a>
              )}
              {project.github_repo && (
                <a
                  className="button"
                  href={project.github_repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
          {project.header_img && (
            <div className={[styles.sectionHeaderCol, styles.col2].join(" ")}>
              <img
                className={styles.sectionHeaderImg}
                src={require(`../images/${project.header_img}`)}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <ul className={styles.summary}>
        <li className={styles.projectSummaryItem}>
          <h2>Objective</h2>
          {project.challenge}
        </li>
        <li className={styles.projectSummaryItem}>
          <h2>Process</h2>
          {project.process}
        </li>
        <li className={styles.projectSummaryItem}>
          <h2>Solution</h2>
          {project.solution}
        </li>
      </ul>
      <div className={styles.projectDataSection}>
        <div className={[styles.flexWrapper, styles.projectData].join(" ")}>
          <div className={styles.caseStudy}>
            <h2>Biggest Challenge</h2>
            <p>{project.biggest_challenge}</p>
            <h2>What I Learned</h2>
            <p>{project.best_thing_i_learned}</p>
            <h2>Up Next</h2>
            <p>{project.up_next}</p>
          </div>
          <div className={styles.caseStudy}>
            <div className={styles.projectSketchImages}>
              <img
                src={require(`../images/${project.project_image_1}`)}
                alt=""
              />
              <img
                src={require(`../images/${project.project_image_2}`)}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    projectsJson(fields: { slug: { eq: $slug } }) {
      name
      live_site
      github_repo
      overview
      class
      tech
      header_img
      project_image_1
      project_image_2
      biggest_challenge
      best_thing_i_learned
      up_next
      challenge
      process
      solution
    }
  }
`
