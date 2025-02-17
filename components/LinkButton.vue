<template>
  <!-- TODO: Figure out why `space-y-4` isn't working on the container and then remove `my-3` -->
  <a :href="props.link.url" target="_blank" class="my-3 text-white text-lg font-medium py-3 px-4 rounded-md flex items-center" :class="`bg-${props.link.brand} hover:bg-${props.link.brand}/80`">
    <div class="w-6 h-6 fill-white mr-3">
      <Discord v-if="props.link.icon === 'Discord'" />
      <Facebook v-if="props.link.icon === 'Facebook'" />
      <GitHub v-if="props.link.icon === 'GitHub'" />
      <Instagram v-if="props.link.icon === 'Instagram'" />
      <LinkedIn v-if="props.link.icon === 'LinkedIn'" />
      <Threads v-if="props.link.icon === 'Threads'" />

      <!-- <component :is="props.link.icon" /> -->
    </div>

    {{ props.link.name }}
  </a>
</template>

<script setup lang="ts">
import type { Link } from '~/types/link';
import { Discord, Facebook, GitHub, Instagram, LinkedIn, Threads } from './icons';

type Props = {
  link: Link
}

const props = defineProps<Props>();
</script>
