import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styles from "../styles/projectgrid.module.scss"

export default function ProjectGrid() {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            name
            class
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <h1>Projects</h1>
      </div>
      <ul className={styles.grid}>
        {data.allProjectsJson.edges.map(({ node }) => (
          <li
            className={[styles.block, styles[node.class]].join(" ")}
            key={node.name}
          >
            <Link to={node.fields.slug}>
              <p className={styles.description}>{node.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
