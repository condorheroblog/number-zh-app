import type { UserModule } from '~/types'

export const routerPathList = [
  'number-to-zh',
  'zh-to-number',
  'number-to-currency',
  'currency-to-number',
]

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      if (to.name === 'index')
        next({ name: 'number-to-zh' })
      else if (to.name && !routerPathList.includes(to.name as string))
        next({ name: 'number-to-zh' })
      else
        next()
    })
  }
}
