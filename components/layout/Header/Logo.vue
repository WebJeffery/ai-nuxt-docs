<template>
  <div>
    <NuxtLinkLocale v-if="logo.light && logo.dark" :to="localePath('/')" class="flex">
      <NuxtImg src="https://ai-nuxt-docs.vercel.app/logo.svg" class="h-7 dark:hidden" />
      <NuxtImg src="https://ai-nuxt-docs.vercel.app/logo-dark.svg" class="hidden h-7 dark:block" />
      <span v-if="showTitle && title" class="ml-3 self-center font-bold">
        {{ $t(title) }}
      </span>
    </NuxtLinkLocale>
  </div>
</template>

<script setup lang="ts">
const { logo, title, showTitle } = useConfig().value.header;
const { localePath } = useI18nDocs();
</script>
