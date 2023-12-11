import AppNavigationRoute from "@/interfaces/app-navigation-route";

const AppNavigationRoutes: AppNavigationRoute[] = [
  // {
  //     id: 0,
  //     title: 'About Us',
  //     url: '/about',
  //     subRoutes: [
  //         {
  //             id: 0,
  //             title: 'Introduction',
  //             url: '/about/introduction',
  //             subRoutes: undefined
  //         },
  //         {
  //             id: 1,
  //             title: 'Commitment',
  //             url: '/about/commitment',
  //             subRoutes: undefined
  //         },
  //         {
  //             id: 2,
  //             title: 'Objective',
  //             url: '/about/objective',
  //             subRoutes: undefined
  //         },
  //     ]
  // },
  {
    id: 0,
    title: "Introduction",
    url: "/about/introduction",
    subRoutes: undefined,
  },
  {
    id: 1,
    title: "Commitment",
    url: "/about/commitment",
    subRoutes: undefined,
  },
  {
    id: 2,
    title: "Objective",
    url: "/about/objective",
    subRoutes: undefined,
  },
  {
    id: 3,
    title: "Our People",
    url: "/people",
    subRoutes: [
      {
        id: 0,
        title: "Partners",
        url: "/people/partners",
      },
      {
        id: 1,
        title: "Associates",
        url: "/people/associates",
      },
    ],
  },
  {
    id: 4,
    title: "Publications",
    url: "/publications",
    subRoutes: undefined,
  },
  {
    id: 5,
    title: "Areas of Practice",
    url: "/practice",
    subRoutes: undefined,
  },
  {
    id: 7,
    title: "Important Links",
    url: "/links",
    subRoutes: undefined,
  },
];

export default AppNavigationRoutes;
