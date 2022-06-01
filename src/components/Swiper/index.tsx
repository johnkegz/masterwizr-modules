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


    const [direction, setDirection] = React.useState<string | null>(null)



    React.useEffect(() => {
        setImages(getImages().slice(0, 6))
        // setCurrentImage(getImages()[0])
    }, [])

    const setLeft = (index: number) => {
        // setC1('slide-out')
        // setC2('slide-in')
        // setI1('slide2')
        // setI2('slide1')

        setDirection('left')
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
        setDirection('right')
        if (newIndex > images.length - 1) {
            setCurrentImageIndex(0)
            setInitialImageIndex(index)
        }
        else {
            setCurrentImageIndex(newIndex)
            setInitialImageIndex(index)
        }
    }

    const handleGetImageClicked = (image: image, index: number) => {
        setDirection('left')
        const newIndex = index - 1
        if (newIndex < 0) {
            setCurrentImageIndex(index)
            setInitialImageIndex(currentImageIndex)
        }
        else {
            setCurrentImageIndex(index)
            setInitialImageIndex(currentImageIndex)
        }
    }

    const addClass = (current: number, index: number, initial: number) =>{
        if(current === index && direction === "left"){
            return 'slide-in'
        }
        if(initial === index && direction === "left"){
            return 'slide-out'
        }

        if(current === index && direction === "right"){
            return 'slide-in3'
        }
        if(initial === index && direction === "right"){
            return 'slide-out3'
        }

        return 'notCurrent'
    }

    const addId = (current: number, index: number, initial: number) =>{
        if(current === index && direction === "left"){
            return 'slide1'
        }
        if(initial === index && direction === "left"){
            return 'slide2'
        }
        if(current === index && direction === "right"){
            return 'slide4'
        }
        if(initial === index && direction === "right"){
            return 'slide3'
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
            <button onClick={() => setRight(currentImageIndex)}>Right</button>
                       <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute' }}>
                {images && images[0] ? <Image image={images[0]} classN={addClass(currentImageIndex, 0, initialImageIndex)} id={addId(currentImageIndex, 0, initialImageIndex)} /> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                {images && images[1] ? <Image image={images[1]} classN={addClass(currentImageIndex, 1, initialImageIndex)} id={addId(currentImageIndex, 1, initialImageIndex)}/> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                {images && images[2] ? <Image image={images[2]} classN={addClass(currentImageIndex, 2, initialImageIndex)} id={addId(currentImageIndex, 2, initialImageIndex)}/> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                {images && images[3] ? <Image image={images[3]} classN={addClass(currentImageIndex, 3, initialImageIndex)} id={addId(currentImageIndex, 3, initialImageIndex)}/> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                {images && images[4] ? <Image image={images[4]} classN={addClass(currentImageIndex, 4, initialImageIndex)} id={addId(currentImageIndex, 4, initialImageIndex)}/> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                {images && images[5] ? <Image image={images[5]} classN={addClass(currentImageIndex, 5, initialImageIndex)} id={addId(currentImageIndex, 5, initialImageIndex)}/> : ""}
                </div>
            </div>      
        </div>
    )
}

export default Swiper
