export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe87571e3d560a8f5b80ba5',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-f97zkrqb',
                  apiId: 'c8c186f8-b254-4f59-823d-43e8fe7450f2'
                },
                {
                  buildHookId: '5fe87571b6d01b4e976fa9e3',
                  title: 'Portfolio Website',
                  name: 'sanity-test-web-rygjqoyr',
                  apiId: '7d6eb1e8-ad6d-446e-bb09-e6dd1a054985'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shessafridi/sanity-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-test-web-rygjqoyr.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
