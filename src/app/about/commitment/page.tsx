import AppPageContainer from "@/components/common/app-page-contianer";
import CommitmentTextList from "@/constants/commitment-text-list";

export default function Commitment() {
    const sectionTitle = 'Client Commitment';

    return (
        <AppPageContainer title={sectionTitle}>
            {
                CommitmentTextList.map((text, index) => {

                    return (
                        <p key={`CommitmentText-${index}`} className="my-3 xl:text-2xl 2xl:text-4xl text-neutral-500 dark:text-neutral-300">
                            {text}
                        </p>
                    );
                })
            }
        </AppPageContainer>
    );
}