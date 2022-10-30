import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/cards',

        // We point it to our component
        // where we defined our QLayout
        component: () => import('layouts/CardsLayout.vue'),

        // Now we define the sub-routes.
        // These are getting injected into
        // layout (from above) automatically
        // by using <router-view> placeholder
        // (need to specify it in layout)
        children: [
          {
            path: 'club-pale',
            component: () => import('src/pages/cards/ClubPalePage.vue')
          },
          {
            path: 'magic',
            component: () => import('src/pages/cards/MagicCardsPage.vue')
          }
        ]
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
