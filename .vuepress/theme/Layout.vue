<template>
  <div id="wrapper">
    <app-header />
    <main>
      <Content />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
export default {
  name: "Layout",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss">
:root {
  --color-blue: #01579b;
  --color-accent-blue: #0277bd;
  --color-white: #fff;
  --color-header-gray: #212121;
  --color-text-gray: #424242;
}

* {
  box-sizing: border-box;
}

html,
body,
#app,
#wrapper {
  height: 100%;
}

#wrapper {
  display: flex;
  flex-direction: column;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 100%;
  color: var(--color-text-gray);
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 90%;
  }
}

a {
  text-decoration: none;
  color: var(--color-accent-blue);
}

h1,
h2,
h3 {
  font-family: "Lato", sans-serif;
  color: var(--color-accent-blue);
  font-weight: normal;
  margin: 0;
}

h1 {
  font-size: 2em;
  color: var(--color-header-gray);
}

h2 {
  margin-bottom: 15px;
  font-size: 2em;
  position: relative;
  @media (max-width: 41.75rem) {
    font-size: 1.75em;
  }
}

h3 {
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 1.25em;
}

main {
  padding-top: 3.125rem;
  flex: 1;
}

ul {
  padding-left: 0;
  margin: 0;
  li {
    list-style-type: none;
  }
}

p {
  margin: 0;
}

.section-header {
  padding-top: 2.75em;
  margin-bottom: 1.5em;
  text-align: center;

  @media (max-width: 48rem) {
    margin-bottom: 25px;
  }
}
.section {
  margin-top: 2.5em;
  @media (max-width: 41.75rem) {
    margin-top: 2em;
    padding: 0 1em;
  }
}

.project-block h2 {
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}

.button {
  margin-top: 0;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-blue);
  border-radius: 3px;
  color: var(--color-blue);
  font-size: 1em;
  text-align: center;
  display: inline-block;
  transition: all 0.5s ease;
  &:hover {
    background-color: var(--color-blue);
    color: var(--color-white);
    .touch & {
      background-color: var(--color-white);
      color: var(--color-blue);
    }
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  a {
    color: var(--color-blue);
    &:hover {
      color: var(--color-white);

      .touch & {
        color: var(--color-blue);
      }
    }
  }
}

.button-block {
  margin: 1rem 0;
}
</style>
