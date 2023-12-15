<script setup lang="ts">
import type { LanguageType } from 'number-to-zh'
import { numberToZh } from 'number-to-zh'
import { isNumber } from '~/utils'

const { t } = useI18n()
const { copy, copied } = useClipboard()

const source = ref<number>()
const zh = ref<string | number>('')
const language = ref<LanguageType>('zh-CN-lowercase')
const skipOneBeforeTen = ref(false)
const repeatChar = ref<false | 'WW' | 'YY'>('WW')

function handleTransform() {
  const sourceValue = source.value
  if (sourceValue && isNumber(sourceValue)) {
    zh.value = numberToZh(sourceValue, {
      language: language.value,
      skipOneBeforeTen: skipOneBeforeTen.value,
      repeatChar: repeatChar.value,
    })
  }
}
</script>

<template>
  <div class="my-6 mr-5 flex flex-col gap-6">
    <label class="flex items-center justify-center gap-4">
      <span class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("input") }}</span>
      <div class="flex flex-1 rounded-md shadow-sm ring-1 ring-gray-300 ring-inset">
        <input v-model="source" type="number" name="input" autocomplete="false" class="flex-1 bg-transparent px-3 py-1.5 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0" :placeholder="t('enter-an-arabic-numeral')">
      </div>
    </label>

    <div class="flex items-center justify-center gap-4">
      <label class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("language") }}</label>
      <div class="flex-1">
        <div class="space-x-4">
          <label class="inline-flex gap-x-2">
            <input v-model="language" value="zh-CN-lowercase" name="language" type="radio" class="input-radio">
            <span class="text-sm">{{ t("zh-CN-lowercase") }}</span>
          </label>
          <label class="inline-flex gap-x-2">
            <input v-model="language" value="zh-CN-uppercase" name="language" type="radio" class="input-radio">
            <span class="text-sm">{{ t("zh-CN-uppercase") }}</span>
          </label>
        </div>
        <div class="space-x-4">
          <label class="inline-flex gap-x-2">
            <input v-model="language" value="zh-TW-lowercase" name="language" type="radio" class="input-radio">
            <span class="text-sm">{{ t("zh-TW-lowercase") }}</span>
          </label>
          <label class="inline-flex gap-x-2">
            <input v-model="language" value="zh-TW-uppercase" name="language" type="radio" class="input-radio">
            <span class="text-sm">{{ t("zh-TW-uppercase") }}</span>
          </label>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <label class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("ten-colloquially") }}</label>
      <div class="flex flex-1 items-center gap-4">
        <label class="inline-flex gap-x-2">
          <input v-model="skipOneBeforeTen" :value="true" name="skipOneBeforeTen" type="radio" class="input-radio">
          <span class="text-sm">{{ t("yes") }}</span>
        </label>
        <label class="inline-flex gap-x-2">
          <input v-model="skipOneBeforeTen" :value="false" name="skipOneBeforeTen" type="radio" class="input-radio">
          <span class="text-sm">{{ t("no") }}</span>
        </label>
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <label class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("repeat-char") }}</label>
      <div class="flex flex-1 items-center gap-4">
        <label class="inline-flex gap-x-2">
          <input v-model="repeatChar" value="WW" name="repeat-char" type="radio" class="input-radio">
          <span class="text-sm"> 万万 </span>
        </label>
        <label class="inline-flex gap-x-2">
          <input v-model="repeatChar" value="YY" name="repeat-char" type="radio" class="input-radio">
          <span class="text-sm"> 亿亿 </span>
        </label>
        <label class="inline-flex gap-x-2">
          <input v-model="repeatChar" :value="false" name="repeat-char" type="radio" class="input-radio">
          <span class="text-sm">{{ t("no") }}</span>
        </label>
      </div>
    </div>

    <label class="flex items-center justify-center gap-4">
      <span class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("output") }}</span>
      <div class="flex flex-1 items-center">
        <div class="inline-flex flex-1 rounded-md shadow-sm ring-1 ring-gray-300 ring-inset">
          <input readonly :value="zh" type="text" name="output" autocomplete="false" class="flex-1 bg-transparent px-3 py-1.5 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0">
        </div>
        <div v-if="!copied" class="basis-1/6" i-carbon-copy cursor-copy @click="copy(zh.toString())" />
        <div v-else class="relative inline-flex basis-1/6 items-center">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success m-2">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
          <span absolute left-8 text-sm>Copied!</span>
        </div>
      </div>
    </label>

    <div class="text-center">
      <button type="button" class="btn" :disabled="!isNumber(source)" @click="handleTransform">
        {{ t("transform") }}
      </button>
    </div>
  </div>
</template>
