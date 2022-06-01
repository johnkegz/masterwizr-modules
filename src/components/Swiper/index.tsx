import React from 'react'
import Image from '../Image'
import './styles.scss'
import { getImages } from '../../api'

interface image {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

function Swiper() {
    const [images, setImages] = React.useState<Array<image>>([])
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(2)
    const [initialImageIndex, setInitialImageIndex] = React.useState<number>(1)
    const [currentClass, setCurrentClass] = React.useState<string>('')
    const [c1, setC1] = React.useState<string>('slide-in')
    const [c2, setC2] = React.useState<string>('slide-out')
    const [i2, setI2] = React.useState<string>('slide2')
    const [i1, setI1] = React.useState<string>('slide1')
    React.useEffect(() => {
        setImages(getImages().slice(0, 6))
        // setCurrentImage(getImages()[0])
    }, [])

    const setLeft = (index: number) => {
        // setC1('slide-out')
        // setC2('slide-in')
        // setI1('slide2')
        // setI2('slide1')
        const newIndex = index - 1
        if (newIndex < 0) {
            setCurrentImageIndex(images.length - 1)
            setInitialImageIndex(index)
        }
        else {
            setCurrentImageIndex(newIndex)
            setInitialImageIndex(index)
        }
    }

    const setRight = (index: number) => {
        const newIndex = index + 1
        if (newIndex > images.length - 1) {
            setCurrentImageIndex(0)
        }
        else {
            setCurrentImageIndex(newIndex)
        }
    }

    const handleGetImageClicked = (image: image, index: number) => {
        console.log("image +++++>", image, index)
        if (currentClass === 'slideOut') {
            setCurrentClass('slide')
        }
        else {
            setCurrentClass('slide')
        }
        setCurrentImageIndex(index)
    }

    console.log(currentImageIndex, images && images[currentImageIndex])


    const addClass = (current: number, index: number, initial: number) =>{
        if(current === index){
            

            return 'slide-in'
        }
        if(initial === index){
            return 'slide-out'
        }
        return 'notCurrent'
    }

    const addId = (current: number, index: number, initial: number) =>{
        if(current === index){
            return 'slide1'
        }
        if(initial === index){
            return 'slide2'
        }
        return 'notCurrent'
    }

    return (
        <div className="container">
            <div className='multipleSliderView'>
                {
                    images.map((image: image, index) => <div className='imageContainer'><Image
                        key={image.id}
                        image={image}
                        handleGetImageClicked={handleGetImageClicked}
                        index={index}
                    /></div>)}
            </div>
            <button onClick={() => setLeft(currentImageIndex)} >left</button>
            {/* <div className=''>
            {images && images[currentImageIndex] ? <Image image={images[currentImageIndex]} /> : ""}
            </div> */}

            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute'  }}>
                {images && images[0] ? <Image image={images[0]} classN={addClass(currentImageIndex, 0, initialImageIndex)} id={addId(currentImageIndex, 0, initialImageIndex)} /> : ""}
                </div>
                <div style={{ position: 'absolute'  }}>
                {images && images[1] ? <Image image={images[1]} classN={addClass(currentImageIndex, 1, initialImageIndex)} id={addId(currentImageIndex, 1, initialImageIndex)}/> : ""}
                </div>
                <div style={{ position: 'absolute'  }}>
                {images && images[2] ? <Image image={images[2]} classN={addClass(currentImageIndex, 2, initialImageIndex)} id={addId(currentImageIndex, 2, initialImageIndex)}/> : ""}
                </div>
                <div style={{ position: 'absolute'  }}>
                {images && images[3] ? <Image image={images[3]} classN={addClass(currentImageIndex, 3, initialImageIndex)} id={addId(currentImageIndex, 3, initialImageIndex)}/> : ""}
                </div>
                <div style={{ position: 'absolute'  }}>
                {images && images[4] ? <Image image={images[4]} classN={addClass(currentImageIndex, 4, initialImageIndex)} id={addId(currentImageIndex, 4, initialImageIndex)}/> : ""}
                </div>
                <div style={{ position: 'absolute'  }}>
                {images && images[5] ? <Image image={images[5]} classN={addClass(currentImageIndex, 5, initialImageIndex)} id={addId(currentImageIndex, 5, initialImageIndex)}/> : ""}
                </div>
                {/* <div style={{  }}>
                {images && images[6] ? <Image image={images[6]} classN={addClass(currentImageIndex, 4, initialImageIndex)} id={addId(currentImageIndex, 4, initialImageIndex)}/> : ""}
                </div> */}
            </div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute' }}>
                {images && images[initialImageIndex] ? <Image image={images[initialImageIndex]} classN={'slide-in3'} id="slide4"/> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                {images && images[currentImageIndex] ? <Image image={images[currentImageIndex]} classN={'slide-in3'}  id="slide4"/> : ""}
                </div>
            </div>

            <button onClick={() => setRight(currentImageIndex)}>Right</button>
        </div>
    )
}

export default Swiper
