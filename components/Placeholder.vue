<template>
  <div class="video-container">
    <video 
      playsinline 
      autoplay 
      muted 
      loop 
      class="responsive-video" 
      src="https://res.cloudinary.com/dcfz8rw5v/video/upload/v1709383272/s8xmrkqsx7vsxgjbg4kh.mov">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: 'CloudinaryVideo'
  // No additional JavaScript is needed for this static component
};
</script>

<style scoped>
.video-container {
  width: 100%; /* Use the full width of the container */
  display: flex;
  justify-content: center; /* Center the video horizontally */
  align-items: center; /* Center the video vertically */
}

.responsive-video {
  width: 100%; /* Make the video responsive */
  max-height: 100vh; /* Limit the video's height to the viewport height */
  object-fit: cover; /* Cover the container fully, might crop the video */
}
</style>
