<template>
  <div id="app">
    <video ref="videoRef" playsinline autoplay muted loop class="responsive-video">
      <!-- The source will be set by the mounted method -->
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoAnimation',
  mounted() {
    // Set the video source and attempt to play
    this.$refs.videoRef.src = "https://cncf-lahore.github.io/Playground-Landing/asserts/demo.mp4";
    this.$refs.videoRef.play().catch(e => {
      console.error("Auto-play was prevented by the browser.", e);
    });
  }
};
</script>

<style scoped>
.responsive-video {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  background-color: #000; /* Background color for before video load */
}
</style>
