<template>
  <div class="text-white text-center flex flex-col space-y-6">
    <!-- <h2 class="text-2xl font-semibold tracking-wider uppercase">Links</h2> -->

    <!-- {{ data?.links }} -->
    <LinkButton v-for="(link, idx) in data?.links" :key="idx" :link="link" />
  </div>
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
