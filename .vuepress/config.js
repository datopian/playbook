module.exports = {
  title: 'Datopian Team Handbook',
  description: 'Datopian Team Handbook',
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
    editLinks: true
  }
}
