const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    //component: () => import('layouts/MainLayout.vue'),
    //children: [
    //  { path: '', component: () => import('pages/IndexPage.vue') }
    //]
  },
  {
    path: "/passo3",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/TerceiraPagina.vue") },
    ],
  },
  {
    path: "/passo4",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [{ path: "", component: () => import("pages/QuartaPagina.vue") }],
  },
  {
    path: "/selecionar",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/SelecionarPagina.vue") },
    ],
  },
  {
    path: "/passo2",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/SegundaPagina.vue") },
    ],
  },
  {
    path: "/fechamento",
    component: () => import("layouts/LayoutLimpo.vue"),
    children: [
      { path: "", component: () => import("pages/FechamentoPagina.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
