<template>
  <section class="projects section" id="projects">
    <div class="section-header"><h1>Projects</h1></div>
    <ul class="project-grid">
      <li v-for="project in projects" :class="`projects-${project.title } project-block`">
        <a :href="project.url">
          <p class="project-description">
            {{ project.name }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ProjectGrid",
  data() {
    return {
      projects: [
        { name: "Codework", title: "codework", url: "/projects/codework" },
        {
          name: "Loan Payoff Calculator",
          title: "loan-payoff-calculator",
          url: "/projects/loan-payoff-calculator"
        },
        {
          name: "Policymaker",
          title: "policymaker",
          url: "/projects/policymaker"
        },
        {
          name: "Gradecraft",
          title: "gradecraft-app",
          url: "/projects/gradecraft"
        },
        {
          name: "Gameful Pedagogy",
          title: "gameful-pedagogy",
          url: "/projects/gameful-pedagogy"
        },
        {
          name: "Accessibility Repo",
          title: "a11y-repo",
          url: "/projects/a11y-repo"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.project-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.project-block {
  opacity: 0.8;
  margin: 0.5em;
  max-width: 360px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1 1 360px;
  @media (max-width: 41.75rem) {
    margin: 0.5em 0;
    max-width: inherit;
  }
  &:hover {
    opacity: 1;
  }

  a {
    display: block;
    padding-bottom: 100%;
    position: relative;
  }
}

.project-description {
  position: absolute;
  bottom: 0px;
  font-size: 1.2em;
  line-height: 1.2em;
  right: 0px;
  padding: 1em;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  color: #3e3e3e;
  width: 100%;
}

.center-align {
  text-align: center;
}

.projects-gradecraft-app {
  background-color: #b8e986;
  background-image: url("../../img/dashboard.png");
}

.projects-codework {
  background-color: #8ed0ff;
  background-image: url("../../img/codework-grid.png");
}

.projects-gameful-pedagogy {
  background-color: #fef283;
  background-image: url("../../img/pedagogy-site.png");
}

.projects-a11y-repo {
  background-color: #ffcf8b;
  background-image: url("../../img/student-assignment-index.png");
}

.projects-loan-payoff-calculator {
  background-color: #f98795;
  background-image: url("../../img/loan-payoff-calculator.png");
}

.projects-policymaker {
  background-color: #8e8ec7;
  background-image: url("../../img/policymaker.png");
}
</style>
