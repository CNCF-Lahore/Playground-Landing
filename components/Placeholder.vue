<template>
  <div id="app" class="content">
    <img
      src="https://cncf-lahore.github.io/Playground-Landing/assets/demo.gif"
      alt="Demo Animation"
      class="responsive-gif"
    />
  </div>
</template>

<script>
export default {
  name: 'GifAnimation'
  // No methods or data necessary for static image display
};
</script>

<style scoped>
.content {
  width: 100%; /* Use the full width of the container */
  height: 100%; /* Use the full height of the container */
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
}

.responsive-gif {
  max-width: 100%; /* Make the GIF responsive */
  max-height: 100vh; /* Limit height to the view height */
  object-fit: contain; /* Ensure the aspect ratio is maintained without cropping */
}
</style>
