"use client";

// IMPORTS - Next

// IMPORTS - Constants
import AppConstants from "@/constants/app-constants";

// IMPORTS - Common

// IMPORTS - Icons
import AppSocialFacebookIcon from "../icons/app-social-facebook-icon";
import AppSocialTwitterIcon from "../icons/app-social-twitter-icon";
import AppSocialInstagramIcon from "../icons/app-social-instagram-icon";
import AppSocialLinkedInIcon from "../icons/app-social-linkedin-icon";
import AppCompanyLogoIcon from "../icons/app-company-logo-icon";
import AppContactHomeIcon from "../icons/app-contact-home-icon";
import AppContactEmailIcon from "../icons/app-contact-email-icon";
import AppContactPhoneIcon from "../icons/app-contact-phone-icon";

// IMPORTS - React
import { useEffect, useRef, useState } from "react";

// IMPORTS - Google Maps
import { Loader as GoogleMapsLoader } from "@googlemaps/js-api-loader";

interface AppFooterContactSectionItemProps {
  content: string;
  icon: JSX.Element;
}

interface AppFooterSocialSectionLinkProps {
  url: string;
  icon: JSX.Element;
}

function AppFooterSocialSection() {
  const socialLinks = AppConstants.officeInformation.socialLinks;

  return (
    <div className="flex justify-center">
      <AppFooterSocialSectionLink
        icon={<AppSocialFacebookIcon />}
        url={socialLinks.facebook}
      />
      <AppFooterSocialSectionLink
        icon={<AppSocialTwitterIcon />}
        url={socialLinks.twitter}
      />
      <AppFooterSocialSectionLink
        icon={<AppSocialInstagramIcon />}
        url={socialLinks.instagram}
      />
      <AppFooterSocialSectionLink
        icon={<AppSocialLinkedInIcon />}
        url={socialLinks.linkedIn}
      />
    </div>
    // <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">

    // </div>
  );
}

function AppFooterSocialSectionLink(props: AppFooterSocialSectionLinkProps) {
  return (
    <a
      href={props.url}
      className="mr-6 2xl:mr-12 text-neutral-600 dark:text-neutral-200"
    >
      {props.icon}
    </a>
  );
}

function AppFooterContactSection() {
  return (
    <div className="flex flex-col">
      <h6 className="mb-4 2xl:mb-8 flex justify-start font-semibold uppercase text-base lg:text-lg xl:text-2xl 2xl:text-4xl">
        Contact Us
      </h6>
      <AppFooterContactSectionItem
        icon={<AppContactHomeIcon />}
        content={AppConstants.officeInformation.address}
      />
      <AppFooterContactSectionItem
        icon={<AppContactEmailIcon />}
        content={AppConstants.officeInformation.email}
      />
      <AppFooterContactSectionItem
        icon={<AppContactPhoneIcon />}
        content={AppConstants.officeInformation.phone}
      />
    </div>
  );
}

function AppFooterContactSectionItem(props: AppFooterContactSectionItemProps) {
  return (
    <p className="mb-4 2xl:mb-8 flex flex-shrink-0 items-center justify-start text-xl">
      {props.icon}
      {props.content}
    </p>
  );
}

function AppFooterMapSection() {
  const googleMapRef = useRef<any>(null);
  const location = AppConstants.officeInformation.location;
  const apiKey = AppConstants.googleMapsAPIKey;
  const mapZoom = 8;
  const [map, setMap] = useState<google.maps.Map>();
  const [mapMarker, setMapMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    const mapLoader = new GoogleMapsLoader({
      apiKey: apiKey,
      version: "weekly",
    });
    const renderMap = async () => {
      const MapLibrary = await mapLoader.importLibrary("maps");
      const MarkerLibrary = await mapLoader.importLibrary("marker");
      const map = new MapLibrary.Map(googleMapRef.current as HTMLElement, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: mapZoom,
      });
      const marker = new MarkerLibrary.Marker({
        map: map,
        position: {
          lat: location.latitude,
          lng: location.longitude,
        },
        clickable: false,
        draggable: false,
      });
      setMap(map);
      setMapMarker(marker);
    };

    renderMap();
  }, [location, apiKey]);

  return <div className="h-[400px]" ref={googleMapRef} />;
}

function AppFooterCopyrightSection() {
  return (
    <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 text-sm">
      <span className="font-semibold text-neutral-600 dark:text-neutral-400 uppercase">
        {AppConstants.title}
      </span>
      <span> (est. 2013)</span>
    </div>
  );
}

export default function AppFooter() {
  return (
    <>
      <footer className="relative w-full bg-[#FBFBFB] pt-2 text-neutral-500 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 lg:pt-4">
        <div className="mx-6 py-10 md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-5 lg:grid-cols-6">
            <div className="hidden lg:flex flex-shrink-0 items-start">
              <AppCompanyLogoIcon />
            </div>
            <div className="col-span-2">
              <AppFooterContactSection />
              <AppFooterSocialSection />
            </div>
            <div className="col-span-3">
              <AppFooterMapSection />
            </div>
          </div>
        </div>
        <AppFooterCopyrightSection />
      </footer>
    </>
  );
}
