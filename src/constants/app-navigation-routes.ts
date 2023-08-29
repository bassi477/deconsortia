import AppNavigationRoute from "@/interfaces/app-navigation-route";

const AppNavigationRoutes: AppNavigationRoute[] = [
    {
        id: 0,
        title: 'About Us',
        url: '/about',
        subRoutes: [
            {
                id: 0,
                title: 'Introduction',
                url: '/about/introduction',
                subRoutes: undefined
            },
            {
                id: 1,
                title: 'Commitment',
                url: '/about/commitment',
                subRoutes: undefined
            },
            {
                id: 2,
                title: 'Objective',
                url: '/about/objective',
                subRoutes: undefined
            },
        ]
    },
    {
        id: 1,
        title: 'Our People',
        url: '/people',
        subRoutes: undefined
    },
    {
        id: 2,
        title: 'Important Links',
        url: '/links',
        subRoutes: undefined
    }
];

export default AppNavigationRoutes;
