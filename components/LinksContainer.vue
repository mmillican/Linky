<template>
  <!--  space-y-4 doesn't seem to be working after deploying -->
  <div class="max-w-sm mx-auto px-4 sm:px-0 text-white flex flex-col">
    <LinkButton v-for="(link, idx) in data?.links" :key="idx" :link="link" />
  </div>

  <!-- Hack to make sure that TW compiles these classes since they are referenced dynamically -->
  <!-- <div class="bg-facebook bg-discord bg-instagram bg-github bg-linkedin bg-threads bg-mvr bg-m2 bg-railops" /> -->
  <!-- <div class="hover:bg-facebook/80 hover:bg-discord/80 hover:bg-instagram/80 hover:bg-github/80 hover:bg-linkedin/80 hover:bg-threads/80 hover:bg-mvr/80 hover:bg-m2/80 hover:bg-railops/80" /> -->
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
