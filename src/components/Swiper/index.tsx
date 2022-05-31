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
    React.useEffect(() => {
        setImages(getImages().slice(0, 6))
        // setCurrentImage(getImages()[0])
    }, [])

    const setLeft = (index: number) => {
        const newIndex = index - 1
        if (newIndex < 0) {
            setCurrentImageIndex(images.length - 1)
        }
        else {
            setCurrentImageIndex(newIndex)
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
                <div style={{ position: 'absolute' }}>
                {images && images[initialImageIndex] ? <Image image={images[initialImageIndex]} classN={'slide-in'} id="slide1"/> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                {images && images[currentImageIndex] ? <Image image={images[currentImageIndex]} classN={'slide-out'}  id="slide2"/> : ""}
                </div>
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
