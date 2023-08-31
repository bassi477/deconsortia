import AppPageContainer from "@/components/common/app-page-contianer";
import AppIntroductionBulletIcon from "@/components/icons/app-introduction-bullet-icon";
import IntroductionBulletsList from "@/constants/introduction-bullets-list";
import IntroductionTextList from "@/constants/introduction-text-list";

export default function Introduction() {
    const sectionTitle = 'Introduction';

    return (
        <AppPageContainer title={sectionTitle}>
            {
                IntroductionTextList.map((text, index) => {

                    return (
                        <p key={`IntroductionText-${index}`} className="my-3 text-neutral-500 dark:text-neutral-300">
                            {text}
                        </p>
                    );
                })
            }
            <ul className="mb-3">
                {
                    IntroductionBulletsList.map((text, index) => {

                        return (
                            <li key={`IntroductionBullets-${index}`} className="flex text-neutral-500 dark:text-neutral-300 text-sm border-b-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                                <AppIntroductionBulletIcon />
                                {text}
                            </li>
                        );
                    })
                }
            </ul>
        </AppPageContainer>
    );
}