<template>
  <a :href="props.link.url" class="text-white font-semibold py-2 px-4 rounded-md flex items-center" :class="`bg-${props.link.brand}`">
    <div class="w-6 h-6 fill-white mr-3">
      <Discord v-if="props.link.icon === 'Discord'" />
      <Facebook v-if="props.link.icon === 'Facebook'" />
      <GitHub v-if="props.link.icon === 'GitHub'" />
      <Instagram v-if="props.link.icon === 'Instagram'" />
      <Threads v-if="props.link.icon === 'Threads'" />

      <!-- <component :is="props.link.icon" /> -->
    </div>

    {{ props.link.name }}
  </a>

  <!-- Hack to make sure that TW compiles these classes since they are referenced dynamically -->
  <!-- <div class="hidden bg-facebook bg-discord bg-instagram bg-github bg-threads bg-mvr bg-m2 bg-railops" /> -->
</template>

<script setup lang="ts">
import type { Link } from '~/types/link';
import { Discord, Facebook, GitHub, Instagram, Threads } from './icons';

type Props = {
  link: Link
}

const props = defineProps<Props>();
</script>
