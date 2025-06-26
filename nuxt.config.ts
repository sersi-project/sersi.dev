// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/eslint',
  ],
  app: {
    head: {
      title: 'Sersi — Your Stack, Your Rules. CLI for Rapid App Scaffolding',
    },
  },
  css: ['~/assets/css/styles.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    storage: 'sessionStorage',
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'yaml'],
          theme: {
            default: 'github-dark',
          },
        },
        toc: {
          depth: 3,
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
        quotes: 'single',
      },
    },
  },
  fonts: {
    families: [
      {
        name: 'Ubuntu Mono Sans',
        provider: 'google',
        fallbacks: ['sans-serif'],
      },
    ],
  },
  robots: {
    blockNonSeoBots: true,
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
  seo: {
    meta: {
      title: 'Sersi — Your Stack, Your Rules. CLI for Rapid App Scaffolding',
      description:
        'Sersi is an open-source CLI to generate customizable full-stack apps using your favorite tools like React, FastAPI, Postgresql, Tailwind and more!',
      ogImage: '/social-preview.png',
      ogUrl: 'https://sersi.dev',
      ogType: 'website',
      ogLocale: 'en_US',
      twitterCard: 'summary_large_image',
      twitterTitle:
        'Sersi — Your Stack, Your Rules. CLI for Rapid App Scaffolding',
      twitterDescription:
        'Sersi is an open-source CLI to generate customizable full-stack apps using your favorite tools like React, FastAPI, Postgresql, Tailwind and more!',
      twitterImage: '/social-preview.png',
      twitterSite: '@sersi_dev',
    },
  },
  site: {
    url: 'https://sersi.dev',
    name: 'Sersi',
    description:
      'Sersi is an open-source CLI to generate customizable full-stack apps using your favorite tools like React, FastAPI, Postgresql, Tailwind and more!',
    defaultLocale: 'en_US',
    language: 'en',
    timezone: 'UTC',
    format: 'en-US',
  },
});
