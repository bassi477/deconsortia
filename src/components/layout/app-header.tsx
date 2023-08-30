"use client"

// IMPORTS - Next Components
import Link from "next/link";

// IMPORTS - CONSTANTS
import AppNavigationRoutes from "@/constants/app-navigation-routes";
import HomeNavigationRoute from "@/constants/home-navigation-route";
import AppImageRepository from "@/constants/app-image-repository";

// IMPORTS - Common Components
import ImagePresenter from "../common/image-presenter";
import { useEffect } from "react";

interface AppHeaderNavigationMenuProps {
    // orientation: 'horizontal' | 'vertical';
}

function AppHeaderNavigationMenu(props: AppHeaderNavigationMenuProps) {

    return (
        <div className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="appHeaderNavigationMenu"
            data-te-collapse-item>
            <ul
                className="list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                data-te-navbar-nav-ref>
                {
                    AppNavigationRoutes.map((route) => {

                        return (
                            <>
                                {
                                    route.subRoutes && route.subRoutes.length > 0 ?
                                        <li
                                            className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                            data-te-nav-item-ref
                                            data-te-dropdown-ref
                                            key={`AppNavigationRoute-${route.id}`}>
                                            <a
                                                className="flex items-center text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                                href="#"
                                                type="button"
                                                id={`AppNavigationRoute-${route.id}-dropdown`}
                                                data-te-dropdown-toggle-ref
                                                aria-expanded="false">
                                                {route.title}
                                                <span className="ml-1 w-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="h-5 w-5">
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <ul
                                                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                                aria-labelledby={`AppNavigationRoute-${route.id}-dropdown`}
                                                data-te-dropdown-menu-ref>
                                                {
                                                    route.subRoutes.map((subRoute) => {

                                                        return (
                                                            <li key={`AppNavigationRoute-${route.id}-SubRoute-${subRoute.id}`}>
                                                                <a
                                                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                                    href={subRoute.url}
                                                                    data-te-dropdown-item-ref>{subRoute.title}</a>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </li>
                                        :
                                        <li
                                            className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                                            data-te-nav-item-ref
                                            key={`AppNavigationRoute-${route.id}`}>
                                            <a
                                                className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                                href={route.url}
                                                data-te-nav-link-ref>{route.title}</a>
                                        </li>
                                }
                            </>

                        );
                    })
                }

            </ul>
        </div>
    );
};

function AppHeaderBrand() {

    const companyLogo = AppImageRepository.COMPANY_LOGO;

    return (
        <div className="flex items-center flex-no-shrink text-white mr-6">
            <Link href={HomeNavigationRoute.url}>
                <ImagePresenter
                    src={companyLogo}
                    alt='company-logo'
                    width={150}
                    height={150}
                />
            </Link>
        </div>
    );
}

function AppHeaderHamburger() {

    return (
        <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#appHeaderNavigationMenu"
            aria-controls="appHeaderNavigationMenu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="[&>svg]:w-7">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7">
                    <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd" />
                </svg>
            </span>
        </button>
    );
}

export default function AppHeader() {

    useEffect(() => {
        const init = async () => {
            const { Dropdown, Collapse, initTE } = await import("tw-elements");
            initTE({ Dropdown, Collapse });
        };
        init();
    }, []);

    return (
        <>
            <nav
                className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <AppHeaderBrand />
                    <AppHeaderHamburger />
                    <AppHeaderNavigationMenu />
                </div>
            </nav>
        </>
    );
};