<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'number-zh-app',
  meta: [
    { name: 'description', content: '阿拉伯数字、中文数字和金额之间相互转换' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? `${import.meta.env.BASE_URL}favicon.svg` : `${import.meta.env.BASE_URL}favicon.svg`,
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
