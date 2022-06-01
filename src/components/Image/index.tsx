import React from 'react'

function Image(props: any) {
    console.log("props >>>>>>>>>>>", props)
    return <div className="wrapper">
        <img
        className={props.classN}
            id={props.id}
            src={props.image.url}
            onClick={() => props.handleGetImageClicked && props.handleGetImageClicked(props.image, props.index)}
        />
    </div>
}

export default Image