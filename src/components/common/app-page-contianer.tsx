interface AppPageContainerProps {
    children: React.ReactNode;
    title?: string;
}

export default function AppPageContainer(props: AppPageContainerProps) {

    return (
        <div className="container mx-auto my-24 md:px-6">
            <section className="mb-32">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="flex flex-wrap items-stretch">
                        <div className="w-full shrink-0 grow-0 basis-auto px-6 py-12 md:px-12">
                            {
                                props.title ?
                                    <h2 className="mb-4 text-2xl font-bold">
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