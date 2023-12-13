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
    <div class="flex items-center justify-center gap-4">
      <label for="input" class="basis-1/6 text-center text-sm text-gray-600 leading-6">{{ t("input") }}</label>
      <div class="flex flex-1 rounded-md shadow-sm ring-1 ring-gray-300 ring-inset">
        <input id="input" v-model="source" type="number" name="input" autocomplete="false" class="flex-1 bg-transparent px-3 py-1.5 text-gray-900 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0" placeholder="Enter an Arabic numeral">
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <label class="basis-1/6 text-center text-sm text-gray-600 leading-6">{{ t("language") }}</label>
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
      <label class="basis-1/6 text-center text-sm text-gray-600 leading-6">{{ t("ten-colloquially") }}</label>
      <div class="flex flex-1 items-center gap-4">
        <div class="inline-flex gap-x-2">
          <input id="yes" v-model="skipOneBeforeTen" :value="true" name="skipOneBeforeTen" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="yes" class="text-sm">{{ t("yes") }}</label>
        </div>
        <div class="inline-flex gap-x-2">
          <input id="no" v-model="skipOneBeforeTen" :value="false" name="skipOneBeforeTen" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="no" class="text-sm">{{ t("no") }}</label>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <label class="basis-1/6 text-center text-sm text-gray-600 leading-6">{{ t("repeat-char") }}</label>
      <div class="flex flex-1 items-center gap-4">
        <div class="inline-flex gap-x-2">
          <input id="WW" v-model="repeatChar" value="WW" name="repeat-char" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="WW" class="text-sm"> 万万 </label>
        </div>
        <div class="inline-flex gap-x-2">
          <input id="YY" v-model="repeatChar" value="YY" name="repeat-char" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="YY" class="text-sm"> 亿亿 </label>
        </div>
        <div class="inline-flex gap-x-2">
          <input id="repeat-char-false" v-model="repeatChar" :value="false" name="repeat-char" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="repeat-char-false" class="text-sm">{{ t("no") }}</label>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <label for="output" class="basis-1/6 text-center text-sm text-gray-600 leading-6">{{ t("output") }}</label>
      <div class="flex flex-1 items-center">
        <div class="inline-flex flex-1 rounded-md shadow-sm ring-1 ring-gray-300 ring-inset">
          <input id="output" readonly :value="zh" type="text" name="output" autocomplete="false" class="flex-1 bg-transparent px-3 py-1.5 text-gray-900 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0">
        </div>
        <div v-if="!copied" class="basis-1/6" i-carbon-copy cursor-copy @click="copy(zh.toString())" />
        <div v-else class="relative inline-flex basis-1/6 items-center">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success m-2">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
          <span absolute left-8 text-sm>Copied!</span>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button type="button" class="btn" :disabled="!isNumber(source)" @click="handleTransform">
        {{ t("transform") }}
      </button>
    </div>
  </div>
</template>
