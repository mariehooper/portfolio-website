<template>
  <section class="about section" id="about">
    <div class="section-header">
      <h1>About</h1>
    </div>
    <div class="about-wrapper">
      <p>I am a Front End Engineer at <a href='https://www.ithaka.org/' target='_blank'>ITHAKA</a> where I work on web applications for researchers, teachers and students.</p>
      <p>When I am not glued to a MacBook screen, you can find me biking, hiking, playing rec sports, or watching college football. If you'd like to know more about my experiences or what I am currently working on, look for me on <a href='https://github.com/mariehooper' target='_blank'>GitHub</a> or check out my <a href='/marie-hooper-resume.pdf' target='_blank'>resume</a>!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped lang="scss">
.about {
  p {
    font-size: 1.1em;
    margin-bottom: 1em;
    line-height: 1.6em;
  }
  a {
    border-bottom: 1px dotted;
    &:hover,
    &:focus {
      border-bottom: 1px solid;
    }
  }
}

.about-wrapper {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
</style>
