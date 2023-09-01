import AppPageContainer from "@/components/common/app-page-contianer";
import ObjectiveTextList from "@/constants/objective-text-list";

export default function Objective() {

    const sectionTitle = 'Our Objective';

    return (
        <AppPageContainer title={sectionTitle}>
            {
                ObjectiveTextList.map((text, index) => {

                    return (
                        <p key={`ObjectiveText-${index}`} className="my-3 xl:text-2xl 2xl:text-4xl text-neutral-500 dark:text-neutral-300">
                            {text}
                        </p>
                    );
                })
            }
        </AppPageContainer>
    );
}