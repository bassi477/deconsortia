"use client";

// IMPORTS - Next
import Link from "next/link";

// IMPORTS - Constants
import AppNavigationRoutes from "@/constants/app-navigation-routes";
import HomeNavigationRoute from "@/constants/home-navigation-route";

// IMPORTS - Common

// IMPORTS - Icons
import AppCompanyLogoIcon from "../icons/app-company-logo-icon";

// IMPORTS - React
import { useEffect } from "react";
import AppNavHamburgerIcon from "../icons/app-nav-hamburger-icon";
import AppNavigationRoute from "@/interfaces/app-navigation-route";
import AppNavDropdownIcon from "../icons/app-nav-dropdown-icon";

interface AppNavigationRouteProps {
  route: AppNavigationRoute;
}

type AppHeaderNavMenuDropdownProps = AppNavigationRouteProps;
type AppHeaderNavMenuDropdownInlineProps = AppNavigationRouteProps;
type AppHeaderNavMenuLinkProps = AppNavigationRouteProps;

function AppHeaderNavMenuDropdown(props: AppHeaderNavMenuDropdownProps) {
  return (
    <li
      className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1 xl:pl-4 xl:pr-2"
      data-te-nav-item-ref
      data-te-dropdown-ref
      key={`AppNavRoute-${props.route.id}`}
    >
      <a
        className="flex items-center text-lg text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        href="#"
        type="button"
        id={`AppNavRoute-${props.route.id}-dropdown`}
        data-te-dropdown-toggle-ref
        aria-expanded="false"
      >
        {props.route.title}
        <span className="ml-1 w-2">
          <AppNavDropdownIcon />
        </span>
      </a>
      <ul
        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby={`AppNavRoute-${props.route.id}-dropdown`}
        data-te-dropdown-menu-ref
      >
        {props.route.subRoutes &&
          props.route.subRoutes.map((subRoute) => {
            return (
              <li key={`AppNavRoute-${props.route.id}-SubRoute-${subRoute.id}`}>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-lg font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href={subRoute.url}
                  data-te-dropdown-item-ref
                >
                  {subRoute.title}
                </a>
              </li>
            );
          })}
      </ul>
    </li>
  );
}

function AppHeaderNavMenuDropdownInline(
  props: AppHeaderNavMenuDropdownInlineProps
) {}

function AppHeaderNavMenuLink(props: AppHeaderNavMenuLinkProps) {
  return (
    <li
      className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1 xl:pl-4 xl:pr-2"
      data-te-nav-item-ref
      key={`AppNavRoute-${props.route.id}`}
    >
      <a
        className="p-0 text-lg text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
        href={props.route.url}
        data-te-nav-link-ref
      >
        {props.route.title}
      </a>
    </li>
  );
}

function AppHeaderNavMenu() {
  return (
    <div
      className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
      id="appHeaderNavMenu"
      data-te-collapse-item
    >
      <ul
        className="list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
        data-te-navbar-nav-ref
      >
        {AppNavigationRoutes.map((route) => {
          return (
            <>
              {route.subRoutes && route.subRoutes.length > 0 ? (
                <AppHeaderNavMenuDropdown route={route} />
              ) : (
                <AppHeaderNavMenuLink route={route} />
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}

function AppHeaderBrand() {
  return (
    <div className="relative flex">
      <Link
        className="w-[100px] lg:w-[150px] xl:w-[200px] h-auto"
        href={HomeNavigationRoute.url}
      >
        <AppCompanyLogoIcon />
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
      data-te-target="#appHeaderNavMenu"
      aria-controls="appHeaderNavMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="[&>svg]:w-7">
        <AppNavHamburgerIcon />
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
        className=" flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 lg:flex-wrap lg:justify-start lg:py-4 sticky z-10"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <AppHeaderBrand />
          <AppHeaderHamburger />
          <AppHeaderNavMenu />
        </div>
      </nav>
    </>
  );
}
