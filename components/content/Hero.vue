<template>
  <section class="relative mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
    <!-- 背景装饰元素 -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-green-500/5 blur-2xl"></div>
    </div>

    <NuxtLinkLocale
      v-if="announcement"
      :to="announcement.to"
      :target="announcement.target"
      class="bg-muted hover:bg-muted/80 inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium transition-colors"
    >
      <template v-if="announcement.icon">
        <SmartIcon :name="announcement.icon" :size="16" />
        <UiSeparator class="mx-2 h-4" orientation="vertical" />
      </template>
      <span class="sm:hidden">{{ announcement.title }}</span>
      <span class="hidden sm:inline">
        {{ announcement.title }}
      </span>
      <Icon name="lucide:arrow-right" class="ml-1 size-4" />
    </NuxtLinkLocale>

    <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] bg-gradient-to-r from-primary via-green-600 to-blue-600 bg-clip-text text-transparent">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <span class="text-muted-foreground max-w-[750px] text-center text-lg sm:text-xl leading-relaxed">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </span>

    <section class="flex w-full flex-wrap items-center justify-center gap-4 py-4 md:pb-10">
      <NuxtLinkLocale
        v-for="(action, i) in actions"
        :key="i"
        :to="action.to"
        :target="action.target"
        class="transition-transform hover:scale-105"
      >
        <UiButton :variant="action.variant" size="lg" class="font-medium shadow-md">
          <SmartIcon v-if="action.leftIcon" :name="action.leftIcon" class="mr-2" />
          {{ action.name }}
          <SmartIcon v-if="action.rightIcon" :name="action.rightIcon" class="ml-2" />
        </UiButton>
      </NuxtLinkLocale>
    </section>

    <!-- 特色标签 -->
    <div class="flex flex-wrap items-center justify-center gap-2 mt-4">
      <span class="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-900/20 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300">
        <Icon name="lucide:cpu" class="size-3" />
        AI驱动
      </span>
      <span class="inline-flex items-center gap-1 rounded-full bg-blue-100 dark:bg-blue-900/20 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
        <Icon name="lucide:zap" class="size-3" />
        高性能
      </span>
      <span class="inline-flex items-center gap-1 rounded-full bg-purple-100 dark:bg-purple-900/20 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
        <Icon name="lucide:shield-check" class="size-3" />
        企业级
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  announcement?: {
    to?: string;
    target?: Target;
    icon?: string;
    title: string;
  };
  actions: {
    name: string;
    leftIcon?: string;
    rightIcon?: string;
    variant?: 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost';
    to: string;
    target?: Target;
  }[];
}>();
defineSlots();
</script>
