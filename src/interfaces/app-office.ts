import AppLocation from "./app-location";
import AppSocialLinkInformation from "./app-social-link-information";

export default interface AppOffice {
    location: AppLocation;
    address: string;
    phone: string;
    email: string;
    socialLinks: AppSocialLinkInformation
}