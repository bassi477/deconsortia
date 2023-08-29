import Link from "next/link";

interface NavigationLinkProps {
    children: React.ReactNode;
    url: string;
}

export default function NavigationLink(props: NavigationLinkProps) {

    return (
        <>
            <Link className="mx-4 my-2" href={props.url}>{props.children}</Link>
        </>
    );
}