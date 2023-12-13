<script setup lang="ts">
import type { LanguageType } from 'number-to-zh-currency'
import { numberToZhCurrency } from 'number-to-zh-currency'

const { t } = useI18n()
const { copy, copied } = useClipboard()

const source = ref('')
const num = ref<string | number>('')
const tenCentsSuffix = ref(false)
const language = ref<LanguageType>('zh-CN-lowercase')
const amountSuffix = ref('整')

function handleTransform() {
  const sourceValue = source.value
  if (sourceValue.length) {
    num.value = numberToZhCurrency(sourceValue, {
      language: language.value,
      tenCentsSuffix: tenCentsSuffix.value,
      amountSuffix: amountSuffix.value,
    })
  }
}
</script>

<template>
  <div class="my-6 mr-5 flex flex-col gap-6">
    <div class="flex items-center justify-center gap-4">
      <label for="input" class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("input") }}</label>
      <div class="flex flex-1 rounded-md shadow-sm ring-1 ring-gray-300 ring-inset">
        <input id="input" v-model="source" type="text" name="input" autocomplete="false" class="flex-1 bg-transparent px-3 py-1.5 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0" placeholder="Enter a numeral">
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
      <label class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("tenCents-suffix") }}</label>
      <div class="flex flex-1 items-center gap-4">
        <div class="inline-flex gap-x-2">
          <input id="tenCents-suffix-yes" v-model="tenCentsSuffix" :value="true" name="tenCentsSuffix" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="tenCents-suffix-yes" class="text-sm">{{ t("yes") }}</label>
        </div>
        <div class="inline-flex gap-x-2">
          <input id="tenCents-suffix-no" v-model="tenCentsSuffix" :value="false" name="tenCentsSuffix" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="tenCents-suffix-no" class="text-sm">{{ t("no") }}</label>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center gap-4">
      <label class="basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300">{{ t("amount-suffix") }}</label>
      <div class="flex flex-1 items-center gap-4">
        <div class="inline-flex gap-x-2">
          <input id="amount-suffix-yes" v-model="amountSuffix" value="整" name="amount-suffix" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="amount-suffix-yes" class="text-sm">整</label>
        </div>
        <div class="inline-flex gap-x-2">
          <input id="amount-suffix-no" v-model="amountSuffix" value="正" name="amount-suffix" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label for="amount-suffix-no" class="text-sm">正</label>
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
