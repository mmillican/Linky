/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./components/*.vue",
  //   "./components/**/*.{js,vue,ts}",
  //   "./layouts/**/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./app.vue",
  //   "./error.vue",
  // ],
  theme: {
    extend: {
      colors: {
        'facebook': '#FF0069a',
        instagram: '#FF0069a',
        // linkedin: '',
        github: '#181717',
        // youtube: '',
        // reddit: '',
        // tumblr: '',
        discord: '#5865F2',
        threads: '#000000',
        // twitch: '',
        millvalley: '#FF0069a',

      }
    },
  },
  plugins: [],
  safelist: [
    'bg-facebook',
    'bg-blue-500',
  ],
}

