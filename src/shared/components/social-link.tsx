import Link from "next/link";

interface SocialLinkProps {
    children: React.ReactNode;
    url: string;
}

export default function SocialLink(props: SocialLinkProps) {

    return (
        <>
            <Link className="m-1" href={props.url}>{props.children}</Link>
        </>
    );
}