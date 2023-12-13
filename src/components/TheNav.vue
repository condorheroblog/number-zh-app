<script setup lang="ts">
import type { RouteRecordName } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
function go(target: string) {
  if (target && target.length)
    router.push(target)
}

const segmentButton = ['md:px-3', 'text-sm', 'px-2', 'py-1', 'inline-block', 'text-gray-400', 'cursor-pointer', '!outline-none', 'hover:bg-gray-100', 'disabled:cursor-default', 'disabled:bg-gray-600', 'disabled:opacity-50']
function customClasses(path: string, routeName: RouteRecordName | null | undefined) {
  if (routeName === path) {
    return [
      'font-medium',
      'bg-gray-300',
      ...segmentButton,
    ]
  }
  return segmentButton
}
</script>

<template>
  <div class="flex gap-1" border="~ rounded gray-200 dark:gray-700">
    <button :class="customClasses('number-to-zh', route.name)" md:text-base @click="() => go('number-to-zh')">
      {{ t("number-to-zh") }}
    </button>

    <button :class="customClasses('zh-to-number', route.name)" md:text-base @click="() => go('zh-to-number')">
      {{ t("zh-to-number") }}
    </button>

    <button :class="customClasses('number-to-currency', route.name)" md:text-base @click="() => go('number-to-currency')">
      {{ t("number-to-currency") }}
    </button>

    <button :class="customClasses('currency-to-number', route.name)" md:text-base @click="() => go('currency-to-number')">
      {{ t("currency-to-number") }}
    </button>
  </div>
</template>
