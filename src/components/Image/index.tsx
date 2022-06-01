import React from 'react'

function Image(props: any) {
    return <div className={props.wrapperClass}>
        <img
            className={props.imageClass}
            id={props.id}
            src={props.url}
            onClick={() => props.handleGetImageClicked && props.handleGetImageClicked(props.image, props.index)}
            alt={props.title}
        />
    </div>
}

export default Image
