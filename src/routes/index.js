const routes = [
    {
        path: "/",
        redirect: '/hot',
        component: () =>
            import("@/containers/Menu/index.vue"),
        children: [
            // sgs
            {
                path: "/hot",
                component: () =>
                    import("@/containers/Menu/Sgs/Hot/index.vue"),
            },
            {
                path: "/article",
                component: () =>
                    import("@/containers/Menu/Sgs/Article/index.vue"),
            },


        ]
    },
    {
        path: "/login",
        component: () =>
            import("@/containers/Login/index.vue")
    },
    {
        path: "*",
        component: () =>
            import("@/containers/NotFound/index.vue")
    }
];
export { routes };