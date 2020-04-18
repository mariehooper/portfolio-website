import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/projectpage.module.scss"
import buttonStyles from "../styles/buttons.module.scss"

export default function ProjectPage({ data, pageContext }) {
  const project = data.projectsJson
  return (
    <Layout
      pagination={{ next: pageContext.next, previous: pageContext.previous }}
    >
      <SEO title={project.name} />
      <div className={styles.projectSectionHeader}>
        <div className={styles.flexWrapper}>
          <div className={styles.sectionHeaderCol}>
            <h1 className={styles.name}>{project.name}</h1>
            <ul className={styles.tech}>
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.overview}>{project.overview}</p>
            <div className={styles.buttonBlock}>
              {project.live_site && (
                <a
                  className={buttonStyles.primary}
                  href={project.live_site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Site
                </a>
              )}
              {project.githubRepo && (
                <a
                  className={buttonStyles.primary}
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
          <div className={styles.col2}>
            <Img fluid={data.headerImage.childImageSharp.fluid} />
          </div>
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
            <p>{project.biggestChallenge}</p>
            <h2>What I Learned</h2>
            <p>{project.bestThingILearned}</p>
            <h2>Up Next</h2>
            <p>{project.upNext}</p>
          </div>
          <div className={styles.caseStudy}>
            <div className={styles.projectSketchImages}>
              <Img fluid={data.projectImage1.childImageSharp.fluid} />
              <Img fluid={data.projectImage2.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query(
    $slug: String!
    $headerImg: String!
    $projectImage1: String!
    $projectImage2: String!
  ) {
    projectsJson(fields: { slug: { eq: $slug } }) {
      name
      live_site
      githubRepo
      overview
      class
      tech
      biggestChallenge
      bestThingILearned
      upNext
      challenge
      process
      solution
    }
    headerImage: file(relativePath: { eq: $headerImg }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectImage1: file(relativePath: { eq: $projectImage1 }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectImage2: file(relativePath: { eq: $projectImage2 }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
