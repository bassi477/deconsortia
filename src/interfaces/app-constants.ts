import AppLocation from "./app-location";
import AppOffice from "./app-office";

export default interface AppConstant {
    title: string;
    version: string;
    googleMapsAPIKey: string;
    developer: string;
    officeInformation: AppOffice;
};