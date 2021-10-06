/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'autogenerated',
      dirName: '.'
    },
    {
      "type": "link",
      "label": "Benchmarks",
      "href": "/benchmarks"
    },
    {
      type: 'link',
      label: 'API Explorer',
      href: '/api/0',
    },

  ],

};
