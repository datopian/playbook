module.exports = {
  title: 'Team Handbook',
  description: 'A guide to our culture and processes',
  dest: 'public',
  markdown: {
    toc: {
      includeLevel: [1, 2, 3]
    }
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://gitlab.com/datopian/handbook',
    repoLabel: 'Contribute!',
    // defaults to false, set to true to enable
    editLinks: true,
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Guide', link: '/induction/' },
      { text: 'Agile Delivery', link: '/agile/' },
      { text: 'User Stories', link: '/user-stories/' },
      {
        text: 'Howtos',
        items: [
          { text: 'Planning Your Day', link: '/planning-your-day/' },
          { text: 'Markdown', link: '/markdown/' },
          { text: 'SCQH (Situation, Complication, Question, Hypothesis)', link: '/scqh/' }
        ]
      }
    ]
  }
}
