const routes = [
    {
        path: "/",
        redirect: '/questioncontrol',
        component: () =>
            import("@/containers/Menu/index.vue"),
        children: [
            // ssxzs
            {
                path: "/questioncontrol",
                component: () =>
                    import("@/containers/Menu/Ssxzs/QuestionControl/index.vue"),
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