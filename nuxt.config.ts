import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/plausible',
    ['@nuxtjs/google-fonts',
      {
        families: {
          Roboto: {
            wght: [100, 400, 500, 600, 700],
            ital: [100],
          },
        }
      }
    ],
    ['@nuxtjs/plausible', {
      // Prevent tracking on localhost
      ignoredHostnames: ['localhost'],
    }],
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      title: 'Find Matt Millican',
      meta: [
        { hid: 'description', name: 'description', content: 'See where to find Matt Millican on the internet.' },
        { hid: 'og:title', property: 'og:title', content: 'Find Matt Millican' },
        { hid: 'og:description', property: 'og:description', content: 'See where to find Matt Millican on the internet.' },
        { hid: 'og:image', property: 'og:image', content: 'https://links.m2dev.to/_nuxt/avatar.TQpsZJpK.jpg' },
      ],
      bodyAttrs: {
        class: 'bg-gray-800',
      },
    },
  },
})

