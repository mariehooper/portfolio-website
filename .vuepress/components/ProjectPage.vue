<template>
  <section>
    <div class="project-section-header">
      <div class="flex-wrapper">
        <div class="section-header-col">
          <h1>{{project.name}}</h1>
          <ul class="project-tech">
            <li v-for="item in project.tech">{{ item }}</li>
          </ul>
          <p class="project-overview">{{project.overview}}</p>
          <div class="button-block center-align">
            <a v-if="project.live_site" class="button live-site" :href="project.live_site" target="_blank">View Live Site</a>
            <a v-if="project.github_repo" class="button live-site" :href="project.github_repo" target="_blank">View on GitHub</a>
          </div>
        </div>
        <div v-if="project.header_img" class="section-header-col col-2">
          <img class="section-header-img" :src="require(`../../img/${project.header_img}`)" alt="">
        </div>
      </div>
    </div>
    <ul class="project-summary">
      <li class="project-summary-item">
        <h2>Objective</h2>
        {{project.challenge}}
      </li>
      <li class="project-summary-item">
        <h2>Process</h2>
        {{project.process}}
      </li>
      <li class="project-summary-item">
        <h2>Solution</h2>
        {{project.solution}}
      </li>
    </ul>
    <div class="project-data-section">
      <div class="project-data flex-wrapper">
        <div class="left-side case-study">
          <h2>Biggest Challenge</h2>
          <p>{{project.biggest_challenge}}</p>
          <h2>What I Learned</h2>
          <p>{{project.best_thing_i_learned}}</p>
          <h2>Up Next</h2>
          <p>{{project.up_next}}</p>
        </div>
        <div class="right-side case-study">
          <div class="project-sketch-images">
            <img :src="require(`../../img/${project.project_image_1}`)">
            <img :src="require(`../../img/${project.project_image_2}`)">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectPage",
  computed: {
    project() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-size: 2.5em;

  @media (max-width: 48rem) {
    font-size: 2em;
  }
}

.project-section-header {
  padding: 2rem;
  margin-bottom: 1.5em;
  text-align: center;
  background: #83a4d4;
  background: linear-gradient(to right, #b6fbff, #83a4d4);

  @media (max-width: 48rem) {
    margin-bottom: 0.5em;
    padding: 2rem 1rem;
  }
}

.flex-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 41.75rem) {
    display: block;
  }
  &.project-data {
    align-items: flex-start;
  }
}

.section-header-col {
  flex: 1;
  padding: 1rem;
  @media (max-width: 41.75rem) {
    padding: 0;
  }
  &:only-child {
    padding: 3rem;
    max-width: 650px;
    margin: 0 auto;
    @media (max-width: 41.75rem) {
      padding: 0;
    }
  }
  &.col-2 {
    max-width: 600px;
  }
}

.section-header-img {
  width: 100%;
}

.project-summary {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  max-width: 1200px;
  @media (max-width: 41.75rem) {
    padding: 0;
  }
  .project-summary-item {
    flex: 1;
    min-width: 250px;
    padding: 1rem;
    line-height: 1.6rem;
    h2 {
      border-bottom: 1px solid;
      padding-bottom: 0.5rem;
      font-size: 1.4rem;
    }
  }
}

.project-overview {
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-top: 0.5rem;
}

.project-data-section {
  background: rgba(182, 250, 255, 0.2);
  @media (max-width: 41.75rem) {
    padding: 0;
  }
}

.case-study {
  flex: 1;
  padding: 1rem;
  h2 {
    font-size: 1.4rem;
  }
  p {
    font-size: 1em;
    line-height: 1.6em;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
  a {
    text-decoration: none;
    color: #0277bd;
    border-bottom: 1px dotted;
    &:hover,
    &:focus {
      border-bottom: 1px solid;
    }
  }
}

.project-tech {
  text-align: center;
  margin-top: 0.5em;
  li {
    display: inline-block;
    background-color: transparentize(#e1f5fe, 0.5);
    margin: 0.25em;
    padding: 0.5em 0.75em;
    border-radius: 3px;
    font-size: 0.8em;
    color: #424242;
    &:not(:last-child) {
      margin-right: 0.5em;
    }
    @media (max-width: 41.75rem) {
      padding: 0.5em;
      font-size: 0.75em;
    }
  }
}

.overview {
  margin: 0 auto;
  max-width: 800px;
  margin-bottom: 40px;
}

.project-example {
  margin: 2rem 0;
  @media (max-width: 48rem) {
    margin: 1rem 0;
  }
}

.project-img-wrapper {
  max-width: 600px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}

.project-sketch-images {
  img {
    width: 100%;
    margin: 1rem 0;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(204, 204, 204, 0.16),
      0 3px 6px rgba(204, 204, 204, 0.23);
  }
}

.project-photo {
  max-width: 960px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}

.scroll {
  max-height: 625px;
  overflow: scroll;
  img {
    max-width: 100%;
  }
}

.mobile-project-example {
  display: inline-block;
  &:not(:last-child) {
    margin-right: 80px;
  }

  @media (max-width: 64rem) {
    width: 30%;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>
