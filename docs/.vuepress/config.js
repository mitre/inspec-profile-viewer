module.exports = {
  title: "MITRE Inspec Compliance Framework",
  description: "A framework containing baselines and tools from MITRE.",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/About/" },
      { text: "Baselines", link: "/Baselines/" },
      { text: "GitHub", link: "https://github.com/mitre" }
    ],
    search: false,
    sidebar: false,
     extend: '@vuepress/theme-default'
  },
   postcss: {
      plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
    },
    title: 'Hello VuePress',
    description: 'Just playing around'
  
};
