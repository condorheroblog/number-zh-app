<template>
  <main

    h-screen flex flex-col
    text="center gray-700 dark:gray-200"
  >
    <TheHeader />
    <div flex="~" flex-col items-center justify-center>
      <TheNav />
      <RouterView />
    </div>
    <TheFooter />
  </main>
</template>
