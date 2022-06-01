import React from 'react'

interface ImageProps {
    wrapperClass: string;
    imageClass: string;
    id?: string;
    url: string;
    alt: string;
}

function Image(props: ImageProps) {
    return <div className={props.wrapperClass}>
        <img
            className={props.imageClass}
            id={props.id}
            src={props.url}
            alt={props.alt}
        />
    </div>
}

export default Image
