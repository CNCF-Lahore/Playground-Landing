<script setup lang="ts">
import { ref, computed } from 'vue';
const nuxtApp = useNuxtApp();
const { activeHeadings, updateHeadings } = useScrollspy();

// Placeholder for dark mode state. Adjust according to your state management.
const isDarkMode = ref(false);

// Function to toggle dark mode. Implement actual logic based on your requirements.
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  // Example: Toggle a class on the <body> element. Adjust based on your setup.
  document.body.classList.toggle('dark-mode', isDarkMode.value);
};

const links = computed(() => [{
  label: 'KCD2024',
  to: '#features',
  icon: 'i-heroicons-cube-transparent',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Podcast',
  to: '#pricing',
  icon: 'i-heroicons-credit-card',
  active: activeHeadings.value.includes('pricing') && !activeHeadings.value.includes('testimonials')
}]);

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
  ]);
});
</script>

<template>
  <UHeader :class="{ 'dark-mode': isDarkMode }" :links="links">
    <template #logo>
      Kubernetes <UBadge label="Playground" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <!-- Assume UColorModeButton can be clicked to toggle dark mode. If not, you might need a custom implementation. -->
      <UColorModeButton @click="toggleDarkMode" />

      <UButton to="https://github.com/CNCF-Lahore/" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>

    <template #panel>
      <!-- Assuming UNavigationTree properly handles links. Ensure dropdown functionality is supported in your implementation. -->
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
