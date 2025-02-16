<template>
  <div class="max-w-sm mx-auto text-white text-center flex flex-col space-y-4">
    <LinkButton v-for="(link, idx) in data?.links" :key="idx" :link="link" />
  </div>

  <!-- Hack to make sure that TW compiles these classes since they are referenced dynamically -->
  <!-- <div class="bg-facebook bg-discord bg-instagram bg-github bg-linkedin bg-threads bg-mvr bg-m2 bg-railops" /> -->
  <!-- <div class="hover:bg-facebook/70 hover:bg-discord/70 hover:bg-instagram/70 hover:bg-github/70 hover:bg-linkedin/70 hover:bg-threads/70 hover:bg-mvr/70 hover:bg-m2/70 hover:bg-railops/70" /> -->
</template>

<script setup lang="ts">
import type { Link } from '~/types/link';
import { useAsyncData } from '#app';

type LinksContainerProps = {
  links: Link[]
}

const { data } = await useAsyncData<LinksContainerProps>('links', async () => {
  const content = await queryContent('links').findOne();
  return { links: content.links };
});
</script>
