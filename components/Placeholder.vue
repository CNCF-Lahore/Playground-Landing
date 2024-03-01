<template>
  <div class="video-container">
    <video playsinline autoplay muted loop class="responsive-video">
      <source src="/asserts/demo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoAnimation'
  // No data or methods needed for this simple component
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%; /* Full width of the container */
  height: 0; /* Initial height, will be overridden */
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
  background-color: #000; /* Background color in case the video is loading */
}

.responsive-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
