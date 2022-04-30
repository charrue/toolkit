import { defineConfig } from "vitepress"

export default defineConfig({
  title: "[Charrue] Toolkit Document",
  description: "A toolkit for building modern web applications",
  lastUpdated: true,
  themeConfig: {
    repo: "charrue/toolkit",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: "",
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
    carbonAds: {
      carbon: 'CEBDT27Y',
      custom: 'CKYD62QM',
      placement: 'vuejsorg'
    },
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        link: "/"
      },
      {
        text: "Array",
        link: "/array"
      }
    ]
  }
})