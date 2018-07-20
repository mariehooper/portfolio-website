<template>
  <header id="header">
    <div class="grid-container">
      <div class="logo">
        <a v-if="isHomePage" @click.prevent="scrollTo" data-target="#wrapper">Marie Hooper</a>
        <a v-else href="/">Marie Hooper</a>
      </div>
      <nav class="navigation">
        <ul>
          <template v-if="isHomePage">
            <li><a href="#projects" @click.prevent="scrollTo" class="nav-projects" data-target="#projects">Projects</a></li>
            <li><a href="#about" @click.prevent="scrollTo" class="nav-about" data-target="#about">About</a></li>
          </template>
          <template v-else>
            <li><a :href='`/projects/${$page.frontmatter.previous_url}`'>Previous <span>Project</span></a></li>
            <li><a :href='`/projects/${$page.frontmatter.next_url}`'>Next <span>Project</span></a></li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import VueScrollTo from "vue-scrollto";
export default {
  name: "Header",
  computed: {
    isHomePage() {
      return this.$page.frontmatter.layout === "home";
    }
  },
  methods: {
    scrollTo(event) {
      VueScrollTo.scrollTo(event.currentTarget.dataset.target, 1000);
    }
  }
};
</script>

<style scoped lang='scss'>
header {
  color: var(--color-blue);
  position: fixed;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid #eee;
  font-size: 1.2em;
}

.grid-container {
  background-color: var(--color-white);
  padding: 0 0.5em 0 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

a {
  color: var(--color-blue);
}

.navigation li {
  display: inline-block;
  &:last-child {
    margin-right: 0;
  }
  a {
    font-size: 1rem;
    display: inline-block;
    padding: 1em 0.5em;
    border-bottom: 2px solid transparent;
    &:hover,
    &.active {
      border-bottom: 2px solid var(--color-blue);
    }
  }
  span {
    display: inline-block;
    @media (max-width: 41.75rem) {
      display: none;
    }
  }
}
</style>
