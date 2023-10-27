
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/sites', component: () => import('pages/SitesPage.vue') },
      { path: '/sites/add', component: () => import('pages/SiteAddPage.vue') },
      { path: '/sites/edit/:id',name: 'edit', component: () => import('pages/SiteEditPage.vue') },
      { path: '/login', component: () => import('pages/loginPage.vue') },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
