<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon" class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>

      <Placeholder />

     <ULandingLogos :title="page.logos.title" align="center">
        <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon" class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white" />
      </ULandingLogos>
    </ULandingHero>


    <ULandingSection :title="page.features.title" :description="page.features.description" :headline="page.features.headline">
      <UPageGrid id="features" class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>


    <!-- <ULandingSection :headline="page.testimonials.headline" :title="page.testimonials.title" :description="page.testimonials.description">
      <UPageColumns id="testimonials" class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
        <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection> -->

    <ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
      <ULandingCTA v-bind="page.cta" :card="false" />
    </ULandingSection> 



  </div>
</template>
