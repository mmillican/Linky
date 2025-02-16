<template>
  <a :href="props.link.url" target="_blank" class="text-white font-medium py-3 px-4 rounded-md flex items-center" :class="`bg-${props.link.brand} hover:bg-${props.link.brand}/70`">
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
  <!-- <div class="bg-facebook bg-discord bg-instagram bg-github bg-threads bg-mvr bg-m2 bg-railops" /> -->
   <!-- <div class="hover:bg-facebook/70 hover:bg-discord/70 hover:bg-instagram/70 hover:bg-github/70 hover:bg-threads/70 hover:bg-mvr/70 hover:bg-m2/70 hover:bg-railops/70" /> -->
</template>

<script setup lang="ts">
import type { Link } from '~/types/link';
import { Discord, Facebook, GitHub, Instagram, Threads } from './icons';

type Props = {
  link: Link
}

const props = defineProps<Props>();
</script>
