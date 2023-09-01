'use client'

import HomeBackgroundImageList from '@/constants/home-background-image-list';
import HomeSlideshowTextList from '@/constants/home-slideshow-text-list';
import TeamMembers from '@/constants/team-members';
import TeamMember from '@/interfaces/team-member';
import Image from 'next/image';
import React from 'react';

interface HomePeopleSectionItemProps {
    key?: React.Key | null | undefined;
    member: TeamMember;
}

function HomeJumbotron() {
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
    const [currentTextIndex, setCurrentTextIndex] = React.useState<number>(0);
    const intervalTime = 1000;

    React.useEffect(() => {
        const maxImageIndex = HomeBackgroundImageList.length - 1;
        const maxTextIndex = HomeSlideshowTextList.length - 1;

        const interval = setInterval(() => {
            setCurrentImageIndex(
                currentValue => currentValue === maxImageIndex ?
                    0 :
                    currentValue + 1
            );
            setCurrentTextIndex(
                currentValue => currentValue === maxTextIndex ?
                    0 :
                    currentValue + 1
            );
        }, intervalTime);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="relative overflow-hidden bg-cover bg-no-repeat p-12 rounded-b-lg h-[45vh]"
            style={{
                backgroundImage: `url('${HomeBackgroundImageList[currentImageIndex]}')`,
                // height: '400px'
            }}>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="flex h-full items-end justify-start p-6 xl:p-12">
                    <div className="text-white">
                        <h2 className="mb-4 text-sm sm:text-2xl md:text-4xl xl:text-6xl font-semibold">{HomeSlideshowTextList[currentTextIndex]}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HomePeopleSectionItem(props: HomePeopleSectionItemProps) {
    const avatarPlaceholder = '/images/avatar-placeholder.jpg';

    return (
        <div key={props.key} className="mb-12 lg:mb-16 xl:mb-32">
            <Image src={avatarPlaceholder}
                alt='avatar-placeholder'
                width={0}
                height={0}
                sizes='100%'
                className='mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px] xl:w-[200px] 2xl:w-[250px]' />
            <h5 className="mb-4 text-lg font-bold">{props.member.name}</h5>
        </div>
    );
}

function HomePeopleSection() {

    return (
        <section className="my-16 md:my-32 xl:my-36 text-center">
            <h2 className="mb-12 text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold">
                Our People
            </h2>

            <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                {
                    TeamMembers.map((member) => {

                        return (
                            <HomePeopleSectionItem
                                key={`HomeTeamMember-${member.id}`}
                                member={member} />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default function Home() {

    return (
        <div className="relative block w-full">
            <HomeJumbotron />
            <HomePeopleSection />
        </div>
    );
}