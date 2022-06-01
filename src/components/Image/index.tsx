import React from 'react'

function Image(props: any) {
    console.log("props >>>>>>>>>>>", props)
    return <div className="wrapper">
        <img
        className={props.classN}
            id={props.id}
            src={props.url}
            onClick={() => props.handleGetImageClicked && props.handleGetImageClicked(props.image, props.index)}
            alt={props.title}
        />
    </div>
}

export default Image