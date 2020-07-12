import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../styles/jobs.module.scss"

export default function Jobs() {
  const jobInfo = useStaticQuery(graphql`
    query {
      allJobsJson {
        edges {
          node {
            id
            place
            title
            dates
            website
            points
            tech
          }
        }
      }
    }
  `)
  const jobData = jobInfo.allJobsJson.edges
  const [activeTab, setActiveTab] = useState(jobData[0].node.id)

  return (
    <section id="jobs">
      <h2>Places I've Worked</h2>
      <div className={styles.tabContainer}>
        <ul role="tablist">
          {jobData.map(({ node }) => {
            const { id, place } = node
            return (
              <li key={id}>
                <button
                  id={id}
                  role="tab"
                  aria-selected={activeTab === id}
                  onClick={() => setActiveTab(id)}
                >
                  {place}
                </button>
              </li>
            )
          })}
        </ul>
        {jobData.map(({ node }) => {
          const { id, website, title, place, dates, points } = node
          return (
            <div
              key={id}
              role="tabpanel"
              aria-labelledby={id}
              className={activeTab === id ? styles.activePanel : styles.panel}
            >
              <h3>
                {title} at{" "}
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {place}
                </a>
              </h3>
              <p className={styles.date}>{dates}</p>
              <ul>
                {points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
