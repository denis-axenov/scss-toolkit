import path from "node:path";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: process.env.NODE_ENV === "production" ? "/scss-toolkit/" : "/",
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
    build: {
        transpile: [
            'shiki'
        ],
    },
    css: [
        '~/assets/global.scss'
    ],
    devtools: {
        enabled: true
    },
    srcDir: path.resolve(__dirname, 'src/docs'),
    compatibilityDate: "2024-10-01",
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler"
                }
            }
        }
    }
})