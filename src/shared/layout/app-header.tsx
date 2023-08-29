import AppNavigationRoutes from "@/constants/app-navigation-routes";
import HomeNavigationRoute from "@/constants/home-navigation-route";
import Link from "next/link";

export default function AppHeader() {

    return (
        <>
            <Link href={HomeNavigationRoute.url}>Logo placeholder</Link>
            <div>
                {
                    AppNavigationRoutes.map((route) => {
                        return (
                            <>
                                <Link href={route.url}>{route.title}</Link>
                            </>
                        );
                    })
                }
            </div>
        </>
    );
}