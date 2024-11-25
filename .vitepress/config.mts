import { defineConfig } from 'vitepress'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { 
    plugins: [ 
      GitChangelog({ 
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://gitee.com/lZao/obsidian', 
      }), 
      GitChangelogMarkdownSection(), 
    ],
  }, 
  title: "My Obsidian",
  description: "My Obsidian",
  lang:'zh',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: calculateSidebar([
      { folderName: '笔记', separate: true }, 
      { folderName: '卡片盒', separate: true }, 
    ]), 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(BiDirectionalLinks()) 
    },
  },
})