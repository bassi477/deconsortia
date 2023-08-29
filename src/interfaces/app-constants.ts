import AppLocation from "./app-location";

export default interface AppConstant {
    title: string;
    version: string;
    googleMapsAPIKey: string;
    developer: string;
    officeLocation: AppLocation;
    officeAddress: string;
};