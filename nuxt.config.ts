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
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      bodyAttrs: {
        class: 'bg-gray-800',
      }
    }
  },
})

