export default interface AppNavigationRoute {
    id: number;
    title: string;
    url: string;
    subRoutes?: AppNavigationRoute[];
};