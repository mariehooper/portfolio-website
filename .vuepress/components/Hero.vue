<template>
  <section class="hero section" id="hero">
    <div class="header-description">
      <img class="hero-img" src="../../img/marie.jpg">
      <p>Front-End Developer living in Ann Arbor, MI. Building cool things with JavaScript.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped lang="scss">
.hero {
  .grid-container {
    padding-top: 80px;
    color: lighten(#333, 5%);

    @media (max-width: 48rem) {
      padding-top: 50px;
      height: auto;
      text-align: center;
    }
  }
}

.hero-img {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.header-description {
  font-size: 2.5em;
  line-height: 1.2em;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 41.75rem) {
    width: 100%;
    font-size: 1.75em;
  }
}
</style>
