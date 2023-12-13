<script setup lang="ts">
import type { LanguageType } from 'zh-currency-to-number'
import { zhCurrencyToNumber } from 'zh-currency-to-number'

const { t } = useI18n()
const { copy, copied } = useClipboard()

const source = ref('')
const num = ref<string | number>('')
const thousandsSeparator = ref(false)
const language = ref<LanguageType>('zh-CN-lowercase')

function handleTransform() {
  const sourceValue = source.value
  if (sourceValue.length) {
    num.value = zhCurrencyToNumber(sourceValue, {
      language: language.value,
      thousandsSeparator: thousandsSeparator.value,
    })
  }
}
</script>

<template>
  <div class="my-6 mr-5 flex flex-col gap-6">
    <div class="flex items-center justify-center gap-4">
      <label for="input" class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("input") }}</label>
      <div class="flex flex-1 rounded-md shadow-sm ring-1 ring-gray-300 ring-inset">
        <input id="input" v-model="source" type="text" name="input" autocomplete="false" class="flex-1 bg-transparent px-3 py-1.5 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0" placeholder="Enter a currency numeral">
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <label class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("language") }}</label>
      <div class="flex-1">
        <div class="space-x-4">
          <div class="inline-flex gap-x-2">
            <input id="zh-CN-lowercase" v-model="language" value="zh-CN-lowercase" name="language" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
            <label for="zh-CN-lowercase" class="text-sm">{{ t("zh-CN-lowercase") }}</label>
          </div>
          <div class="inline-flex gap-x-2">
            <input id="zh-CN-uppercase" v-model="language" value="zh-CN-uppercase" name="language" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
            <label for="zh-CN-uppercase" class="text-sm">{{ t("zh-CN-uppercase") }}</label>
          </div>
        </div>
        <div class="space-x-4">
          <div class="inline-flex gap-x-2">
            <input id="zh-TW-lowercase" v-model="language" value="zh-TW-lowercase" name="language" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
            <label for="zh-TW-lowercase" class="text-sm">{{ t("zh-TW-lowercase") }}</label>
          </div>
          <div class="inline-flex gap-x-2">
            <input id="zh-TW-uppercase" v-model="language" value="zh-TW-uppercase" name="language" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
            <label for="zh-TW-uppercase" class="text-sm">{{ t("zh-TW-uppercase") }}</label>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <label class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("comma-separator") }}</label>
      <div class="flex flex-1 items-center gap-4">
        <div class="inline-flex gap-x-2">
          <input id="yes" v-model="thousandsSeparator" :value="true" name="thousandsSeparator" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="yes" class="text-sm">{{ t("yes") }}</label>
        </div>
        <div class="inline-flex gap-x-2">
          <input id="no" v-model="thousandsSeparator" :value="false" name="thousandsSeparator" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="no" class="text-sm">{{ t("no") }}</label>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <label for="output" class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("output") }}</label>
      <div class="flex flex-1 items-center">
        <div class="inline-flex flex-1 rounded-md shadow-sm ring-1 ring-gray-300 ring-inset">
          <input id="output" readonly :value="num" type="text" name="output" autocomplete="false" class="flex-1 bg-transparent px-3 py-1.5 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0">
        </div>
        <div v-if="!copied" class="basis-1/6" i-carbon-copy cursor-copy @click="copy(num.toString())" />
        <div v-else class="relative inline-flex basis-1/6 items-center">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success m-2">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
          <span absolute left-8 text-sm>Copied!</span>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button type="button" class="btn" :disabled="!source.length" @click="handleTransform">
        {{ t("transform") }}
      </button>
    </div>
  </div>
</template>
