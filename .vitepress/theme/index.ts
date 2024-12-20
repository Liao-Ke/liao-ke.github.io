import DefaultTheme from 'vitepress/theme'
import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'

import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import MyLayout from './MyLayout.vue'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import type { Theme as ThemeConfig } from 'vitepress'
import { h } from 'vue'
export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(MyLayout, null, {
      // 其他的配置...
      'layout-top': () => [
        h(NolebaseHighlightTargetedHeading),
      ],
    })
  },
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(NolebaseGitChangelogPlugin)

  }
}
export default Theme