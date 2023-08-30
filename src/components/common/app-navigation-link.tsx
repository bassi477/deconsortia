import Link from "next/link";

interface AppNavigationLinkProps {
    children: React.ReactNode;
    url: string;
}

export default function AppNavigationLink(props: AppNavigationLinkProps) {

    return (
        <>
            <Link className="mx-4 my-2" href={props.url}>{props.children}</Link>
        </>
    );
}