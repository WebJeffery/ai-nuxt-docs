import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  site: {
    name: 'Nuxt 全栈企业级开发实战指南',
    description: '全面掌握 Nuxt 全栈技术栈，从零基础到企业级应用开发的完整学习路径',
    url: 'https://ai-nuxt-docs.vercel.app/',
    logo: 'https://ai-nuxt-docs.vercel.app/logo.svg',
  },
  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',        // UI组件库
    '@vueuse/nuxt',       // Vue组合式工具
    '@ztl-uwu/nuxt-content', // 内容管理
    '@nuxt/image',        // 图片优化
    '@nuxt/icon',         // 图标系统
    '@nuxtjs/color-mode', // 暗色模式
    'nuxt-og-image',      // OG图片生成
    '@nuxt/scripts',      // 脚本管理
    '@nuxtjs/i18n',       // 国际化
    '@nuxt/fonts',        // 字体管理
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: join(currentDir, './components/ui'),
  },
  components: {
    dirs: [
      {
        path: './components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    strategy: 'prefix_except_default',
  },
  colorMode: {
    classSuffix: '',
    disableTransition: true,
  },
  css: [
    join(currentDir, './assets/css/themes.css'),
    '~/assets/css/tailwind.css',
  ],
  content: {
    markdown: {
      toc: {
        depth: 4, // 设置TOC深度为4，包含h1-h4标题
        searchDepth: 4,
      },
      anchorLinks: {
        h1: true,
        h2: true,
        h3: true,
        h4: true, // 为h4标题生成锚点链接
      },
    },
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'mdc', 'yaml', 'bash', 'ini', 'dotenv'],
    },
    navigation: {
      fields: [
        'icon',
        'navBadges',
        'navTruncate',
        'badges',
        'toc',
        'sidebar',
        'collapse',
        'editLink',
        'prevNext',
        'breadcrumb',
        'fullpage',
      ],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    },
  },
  fonts: {
    defaults: {
      weights: ['300 800'],
    },
    providers: {
      google: false,
    },
    families: [
      {
        name: 'Geist',
        src: 'local("Geist")',
        weights: ['300', '400', '500', '600', '700', '800'],
      },
      {
        name: 'Geist Mono',
        src: 'local("Geist Mono")',
        weights: ['300', '400', '500', '600', '700', '800'],
      },
    ],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      },
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['debug'],
    },
  },
  compatibilityDate: '2025-05-13',
});
