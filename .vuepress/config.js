module.exports = {
  title: 'Datopian Playbook',
  description: 'A guide to our culture and processes',
  dest: 'public',
  markdown: {
    linkify: true,
    typographer: true,
    breaks: true,
    html: true,
    toc: {
      includeLevel: [2, 3]
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
  themeConfig: {
    smoothScroll: true,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://gitlab.com/datopian/core/playbook',
    repoLabel: '📕',
    // defaults to false, set to true to enable
    editLinks: true,
    sidebar: 'auto',
    nav: [
      { text: '🥢 Culture', link: '/culture/' },
      {
        text: '📚 Plays',
        items: [
          { text: 'Agile Delivery', link: '/agile/' },
          { text: 'Client Support', link: '/support/' },
          { text: 'Running the Org', link: '/running-the-org/' },
          { text: 'Style Guides', link: '/style-guide/' },
          { text: 'Communications (Internal)', link: '/communications/' },
          { text: 'Content Writing and Publishing', link: '/content-writing-and-publishing/'}
        ]
      },
      {
        text: '🕸️ Patterns',
        items: [
          { text: 'Job Stories', link: '/job-stories/' },
          { text: 'Getting Things Done (GTD)', link: '/getting-things-done/' },
          { text: 'Objectives and Key Results (OKRs)', link: '/objectives-and-key-results/' },
          { text: 'Planning Your Day', link: '/planning-your-day/' },
          { text: 'Git', link: '/version-control/' },
          { text: 'Markdown', link: '/markdown/' },
          { text: 'How to Propose Changes', link: '/how-to-propose-changes/' },
          { text: 'SCQH (Situation, Complication, Question, Hypothesis)', link: '/scqh/' }
        ]
      },
      {
        text: '👩‍🎓 Programs',
        items: [
          { text: 'Onboarding', link: '/onboarding/' },
          { text: 'Apprentice', link: '/apprentice/' },
          { text: 'Tech Leaders', link: '/tech-leaders-program/' }
        ]
      },
      {
        text: '🥋 Dojo',
        items: [
          { text: 'Dojo', link: '/dojo/' },
          { text: 'Technical Writing', link: '/dojo/technical-writing/' },
          { text: 'Python', link: '/dojo/python/' },
          { text: 'JavaScript', link: '/dojo/javascript/' },
          { text: 'Analysis', link: '/dojo/analysis/' },
          { text: 'Datopian Tech', link: 'https://tech.datopian.com/' }
        ]
      },
      { text: 'Glossary', link: '/glossary/' }
    ]
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        'ga': 'UA-144039037-2'
      }
    ]
  ]
}
