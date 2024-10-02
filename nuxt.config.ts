import path from "node:path";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
      head: {
          link: [
              {
                  rel: "icon",
                  type: "image/png",
                  href: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSI+PC9zdmc+"
              }
          ]
      }
  },
  css: [
      '~/assets/global.scss'
  ],
  devtools: {
      enabled: true
  },
  srcDir: path.join(__dirname, 'src/docs/'),
  ssr: false,
  compatibilityDate: "2024-10-01"
})