<script setup lang="ts">
import type { RouteRecordName } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
function go(target: string) {
  if (target && target.length)
    router.push(target)
}

function customClasses(path: string, routeName: RouteRecordName | null | undefined) {
  if (routeName === path) {
    return {
      'border': true,
      'border-sky-500': true,
    }
  }
  return []
}
</script>

<template>
  <div class="mb-4 flex gap-1" border="~ rounded gray-200 dark:gray-700" md:mb-3>
    <ABtn variant="text" class="text-xs text-slate-400" :class="customClasses('number-to-zh', route.name)" md:text-sm @click="() => go('number-to-zh')">
      {{ t("number-to-zh") }}
    </ABtn>

    <ABtn variant="text" class="text-xs text-slate-400" :class="customClasses('zh-to-number', route.name)" md:text-sm @click="() => go('zh-to-number')">
      {{ t("zh-to-number") }}
    </ABtn>

    <ABtn variant="text" class="text-xs text-slate-400" :class="customClasses('number-to-currency', route.name)" md:text-sm @click="() => go('number-to-currency')">
      {{ t("number-to-currency") }}
    </ABtn>

    <ABtn variant="text" class="text-xs text-slate-400" :class="customClasses('currency-to-number', route.name)" md:text-sm @click="() => go('currency-to-number')">
      {{ t("currency-to-number") }}
    </ABtn>
  </div>
</template>
