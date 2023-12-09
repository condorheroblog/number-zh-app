<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <header flex="~" mb-6 items-center justify-between border-b border-slate-200 p-4 dark:border-gray-700>
    <h1 w-8 title="Number ZH">
      <a rel="noreferrer" href="https://github.com/condorheroblog/number-zh" target="_blank">
        <img src="/favicon.svg" inline-block>
      </a>
    </h1>

    <nav flex flex-gap-4 text-xl>
      <RouterLink icon-btn to="/" :title="t('button.home')">
        <div i-carbon-campsite />
      </RouterLink>

      <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a icon-btn :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>

      <RouterLink icon-btn to="/about" :title="t('button.about')" data-test-id="about">
        <div i-carbon-dicom-overlay />
      </RouterLink>

      <a rel="noreferrer" href="https://github.com/condorheroblog/number-zh" target="_blank" title="GitHub" flex="~ gap-1" items-center op50 hover:op80>
        <div i-carbon-logo-github />
      </a>
    </nav>
  </header>
</template>
