import path from "node:path";
import {fileURLToPath} from "node:url";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        'scss-toolkit': fileURLToPath(new URL('./src/styles', import.meta.url))
    },
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
    css: [
        '~/assets/global.scss'
    ],
    compatibilityDate: "2024-10-01",
    devtools: {
        enabled: true
    },
    modules: [
        "nuxt-shiki"
    ],
    shiki: {
        defaultLang: 'scss',
        defaultTheme: 'dark-plus',
        highlightOptions: {}
    },
    srcDir: path.resolve(__dirname, 'src/docs'),
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