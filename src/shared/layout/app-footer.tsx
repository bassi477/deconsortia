import AppImageRepository from "@/constants/app-image-repository";
import ImagePresenter from "../components/image-presenter";
import AppConstants from "@/constants/app-constants";
import { HomeIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import SocialLink from "../components/social-link";

export default function AppFooter() {

    const companyLogo = AppImageRepository.COMPANY_LOGO;

    return (
        <>
            <div className="flex flex-row p-5 bg-white rounded-t">
                <div className="basis-2/12 mr-2">
                    <ImagePresenter
                        src={companyLogo}
                        alt='company-logo'
                        width={200}
                        height={200}
                    />
                </div>
                <div className="basis-4/12 flex flex-col">
                    <div className="flex flex-row">
                        <HomeIcon className="basis-1/4 caret-black" />
                        <span className="basis-3/4">{AppConstants.officeInformation.address}</span>
                    </div>
                    <div className="flex flex-row">
                        <PhoneIcon className="basis-1/4 caret-black" />
                        <span className="basis-3/4">{AppConstants.officeInformation.phone}</span>
                    </div>
                    <div className="flex flex-row">
                        <EnvelopeIcon className="basis-1/4 caret-black" />
                        <span className="basis-3/4">{AppConstants.officeInformation.email}</span>
                    </div>
                </div>
                <div className="basis-2/12 flex flex-col">
                    <h3>Connect with us</h3>
                    <div className="flex flex-row justify-center">
                        <SocialLink
                            url="https://www.facebook.com">
                            <ImagePresenter
                                src={AppImageRepository.SOCIAL_FACEBOOK_LOGO}
                                alt="social-facebook-logo"
                                width={100}
                                height={100} />
                        </SocialLink>
                        <SocialLink
                            url="https://www.twitter.com">
                            <ImagePresenter
                                src={AppImageRepository.SOCIAL_TWITTER_LOGO}
                                alt="social-twitter-logo"
                                width={100}
                                height={100} />
                        </SocialLink>
                        <SocialLink
                            url="https://www.instagram.com">
                            <ImagePresenter
                                src={AppImageRepository.SOCIAL_INSTAGRAM_LOGO}
                                alt="social-instagram-logo"
                                width={100}
                                height={100} />
                        </SocialLink>
                        <SocialLink
                            url="https://www.linkedin.com">
                            <ImagePresenter
                                src={AppImageRepository.SOCIAL_LINKEDIN_LOGO}
                                alt="social-linkedin-logo"
                                width={100}
                                height={100} />
                        </SocialLink>
                    </div>
                </div>
                <div className="basis-4/12">
                    Map will be here.
                </div>
            </div>
        </>
    );
}

/*

For reference

<div class="row custom-footer text-light">
    <div class="col-lg-12">
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-4">
                        <img style="background: white;" class="custom_footer_logo" id="logo" class="d-inline-block mr-1"
                            alt="Logo" src="{{ url('img/logo.svg') }}">
                    </div>
                    <div class="col-lg-8">
                        <div class="row my-1">
                            <div class="col-lg-12">
                                <h3>Contact Us</h3>
                            </div>
                        </div>
                        <div class="row my-1">
                            <div class="col-lg-1">
                                <i class="fa fa-address-book" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-11">
                                <p> Basement, Sultan Arcade, Main IJP Road, Sector I-8/4, Faizabad, Islamabad.</p>
                            </div>
                        </div>
                        <div class="row my-1">
                            <div class="col-lg-1">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-11">
                                <p>033 5571 7171</p>
                            </div>
                        </div>
                        <div class="row my-1">
                            <div class="col-lg-1">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-11">
                                <p>info@deconsortia.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="row my-1">
                            <div class="col-lg-12">
                                <h3>Connect with us</h3>
                            </div>
                        </div>
                        <div class="row my-1">
                            <div class="col-lg-12">
                                <a href="#" class="social_links"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" class="social_links"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#" class="social_links"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#" class="social_links"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div id="map_loading" class="spinner-border mt-5"></div>
                        <div id="map_div" style="display: none;" class="map_div">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <p class="text-center pb-0 pt-2 mb-1">Powered by Bootstrap &COPY;</p>
            </div>
        </div>
    </div>
</div>


*/