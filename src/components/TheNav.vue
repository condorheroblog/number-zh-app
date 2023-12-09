<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
const route = useRoute()
function go(target: string) {
  if (target && target.length)
    router.push(target)
}

const routerPathList = [
  'number-to-zh',
  'zh-to-number',
  'number-to-currency',
  'currency-to-number',
]

const currentPath = routerPathList.find(path => path === route.fullPath) ?? routerPathList[0]
</script>

<template>
  <div class="mb-4 flex gap-1" border="~ rounded gray-200 dark:gray-700" md:mb-3>
    <ABtn variant="text" :class="{ 'border-sky-500': currentPath.endsWith('number-to-zh') }" border text-slate-400 @click="() => go('number-to-zh')">
      {{ t("number-to-zh") }}
    </ABtn>

    <ABtn variant="text" class="text-slate-400" @click="() => go('zh-to-number')">
      {{ t("zh-to-number") }}
    </ABtn>

    <ABtn variant="text" class="text-slate-400" @click="() => go('number-to-currency')">
      {{ t("number-to-currency") }}
    </ABtn>

    <ABtn variant="text" class="text-slate-400" @click="() => go('currency-to-number')">
      {{ t("currency-to-number") }}
    </ABtn>
  </div>
</template>
