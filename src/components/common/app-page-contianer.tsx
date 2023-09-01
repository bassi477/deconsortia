interface AppPageContainerProps {
    children: React.ReactNode;
    title?: string;
}

export default function AppPageContainer(props: AppPageContainerProps) {

    return (
        <div className="mx-auto my-24 md:px-6">
            <section className="mb-32">
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                    <div className="flex flex-wrap items-stretch">
                        <div className="w-full shrink-0 grow-0 basis-auto px-3 py-6 md:py-12 md:px-12">
                            {
                                props.title ?
                                    <h2 className="mb-4 xl:mb-6 2xl:mb-8 text-2xl xl:text-4xl 2xl:text-6xl font-bold">
                                        {props.title}
                                    </h2> :
                                    null
                            }
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}