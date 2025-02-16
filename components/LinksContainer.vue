<template>
  <div class="max-w-sm mx-auto text-white text-center flex flex-col space-y-6">
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
