<script setup lang="ts">
const { copy, copied } = useClipboard()
const source = ref('')
</script>

<template>
  <div mt-6 />
  <div class="sm:col-span-4" flex="~ items-center justify-center gap-4">
    <label for="input" class="block text-sm text-gray-600 font-medium leading-6">Input</label>
    <div class="flex rounded-md shadow-sm ring-1 ring-gray-300 ring-inset sm:max-w-md focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-inset">
      <input id="input" v-model="source" w-86 type="text" name="input" autocomplete="false" class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0" placeholder="Enter an Arabic numeral">
    </div>
  </div>
  <div mt-6 />
  <div class="sm:col-span-4" flex="~ items-center justify-center gap-4">
    <label for="output" class="block text-sm text-gray-600 font-medium leading-6">Output</label>
    <div class="flex rounded-md shadow-sm ring-1 ring-gray-300 ring-inset sm:max-w-md focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-inset">
      <input id="output" readonly w-80 type="output" name="output" autocomplete="false" class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0">
    </div>
    <div v-if="!copied" i-carbon-copy cursor-copy @click="copy(source)" />
    <div v-else flex="~ items-center relative">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success m-2">
        <span data-rgh-whitespace="space" /><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
      </svg>
      <!-- <span text-sm absolute>Copied!</span> -->
    </div>
  </div>
  <div mt-6 />
  <ABtn>
    转换
  </ABtn>
</template>
