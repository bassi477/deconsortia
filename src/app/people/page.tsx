import AppPageContainer from "@/components/common/app-page-contianer";
import AppContactEmailIcon from "@/components/icons/app-contact-email-icon";
import AppContactPhoneIcon from "@/components/icons/app-contact-phone-icon";
import TeamMembers from "@/constants/team-members";
import TeamMember from "@/interfaces/team-member";
import Image from "next/image";

interface PersonCardProps {
    member: TeamMember;
    key?: React.Key | null | undefined
}

interface PersonCardContactItemProps {
    text: string;
    icon: React.ReactNode;
    classNames?: string;
}

function PersonCard(props: PersonCardProps) {
    const avatarPlaceholder = '/images/avatar-placeholder.jpg';
    return (
        <div key={props.key} className="flex justify-start items-start flex-wrap rounded-lg bg-white shadow-lg dark:bg-neutral-700 transition-transform duration-500 hover:scale-105">
            <Image src={avatarPlaceholder}
                alt="avatar-placeholder"
                width={0}
                height={0}
                sizes="100%"
                className="w-full md:w-4/12 h-auto" />
            <div className="p-3 md:p-6 w-full md:w-8/12">
                <h5 className="mb-2 2xl:mb-6 text-xl xl:text-2xl 2xl:text-6xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {props.member.name}
                </h5>
                <p className="mb-4 2xl:mb-12 text-base xl:text-xl 2xl:text-4xl text-neutral-600 dark:text-neutral-200">
                    {props.member.description}
                </p>
                <div className="flex flex-wrap justify-start">
                    {
                        props.member.email && <PersonCardContactItem text={props.member.email}
                            icon={<AppContactEmailIcon />} />
                    }
                    {
                        props.member.phone && <PersonCardContactItem text={props.member.phone}
                            icon={<AppContactPhoneIcon />} classNames="lg:ml-auto" />
                    }
                </div>
            </div>
        </div>
    );
}

function PersonCardContactItem(props: PersonCardContactItemProps) {

    return (
        <p className={`flex justify-start items-center xl:text-xl 2xl:text-4xl text-neutral-800 dark:text-neutral-50 ${props.classNames ?? ''}`}>
            {props.icon}
            {props.text}
        </p>
    );
}

export default function People() {

    return (
        <AppPageContainer title="Our People">
            <div className="w-full grid-1 grid gap-8">
                {
                    TeamMembers.map((member) => {

                        return (
                            <PersonCard member={member} key={`TeamMember-${member.id}`} />
                        );
                    })
                }
            </div>
        </AppPageContainer>
    );
}