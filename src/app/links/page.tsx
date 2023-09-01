import AppPageContainer from "@/components/common/app-page-contianer";
import AppLinksOpenIcon from "@/components/icons/app-links-open-icon";
import ImportantLinks from "@/constants/important-links";

export default function Links() {
    const sectionTitle = 'Important Links';

    return (
        <AppPageContainer title={sectionTitle}>
            <div className="my-3 grid-1 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    ImportantLinks.map((link, index) => {

                        return (
                            <a key={`ObjectiveText-${index}`}
                                href={link.url}
                                className="flex lg:text-lg xl:text-xl 2xl:text-3xl cursor-pointer rounded-lg p-4 xl:p-6 2xl:p-8 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200 border-b-2 border-neutral-100 border-opacity-100 my-2 shadow-lg">
                                {link.title}
                                <span className="ml-auto">
                                    <AppLinksOpenIcon />
                                </span>
                            </a>
                        );
                    })
                }
            </div>
        </AppPageContainer>
    );
}