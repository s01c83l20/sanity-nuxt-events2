export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events2-studio-6sdsvzbo',
                  apiId: '0a71262b-fec2-4484-b757-18caebf11ea5'
                },
                {
                  buildHookId: '5e18ab56637167552504e3f5',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events2-web-xckzubmw',
                  apiId: '97b8fb2b-c88a-4527-8275-8ebad1f7a699'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/s01c83l20/sanity-nuxt-events2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events2-web-xckzubmw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
