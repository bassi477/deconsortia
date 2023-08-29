import Image from "next/image";

interface ImagePresenterProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export default function ImagePresenter(props: ImagePresenterProps) {

    const defaultWidth = 100;
    const defaultHeight = 100;

    return (
        <>
            <div className="inline-block">
                <Image 
                src={props.src} 
                alt={props.alt} 
                width={props.width ?? defaultWidth} 
                height={props.height ?? defaultHeight} />
            </div>
        </>
    );
} 