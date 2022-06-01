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



    const [touchStart, setTouchStart] = React.useState(null)
    const [touchEnd, setTouchEnd] = React.useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50

    const onTouchStart = (e: any) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe || isRightSwipe) {
            if (isLeftSwipe) {
                setRight(currentImageIndex)
            }
            else {



                setLeft(currentImageIndex)
            }

            console.log('swipe', isLeftSwipe ? 'left' : 'right')
        }
        // add your conditional logic here
    }

    const [direction, setDirection] = React.useState<string | null>('left')

    const browseImages = async() => {
        let imagesData = await getImages()
        let data = Array.isArray(imagesData)?imagesData:[]
        setImages(data.slice(0, 6))
    }


    React.useEffect(() => {
        browseImages()
    }, [])

    const setLeft = (index: number) => {
        setDirection('right')
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
        // setDirection('right')
        setDirection('left')
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

    const addClass = (current: number, index: number, initial: number) => {
        if (current === index && direction === "left") {
            return 'slide-in'
        }
        if (initial === index && direction === "left") {
            return 'slide-out'
        }

        if (current === index && direction === "right") {
            return 'slide-in3'
        }
        if (initial === index && direction === "right") {
            return 'slide-out3'
        }

        return 'notCurrent'
    }

    const addId = (current: number, index: number, initial: number) => {
        if (current === index && direction === "left") {
            return 'slide1'
        }
        if (initial === index && direction === "left") {
            return 'slide2'
        }
        if (current === index && direction === "right") {
            return 'slide4'
        }
        if (initial === index && direction === "right") {
            return 'slide3'
        }
        return 'notCurrent'
    }

    return (
        <div className="container">
            <div className='multipleSliderView'>
                {
                    images.map((image: image, index) => <div className='' key={image.id}>
                        <Image
                            image={image}
                            handleGetImageClicked={handleGetImageClicked}
                            index={index}
                            url={image.thumbnailUrl} alt={images[0].title}
                        />
                        <div>{image.title.split(" ")[0]}</div>
                    </div>)}
            </div>
            <button onClick={() => setLeft(currentImageIndex)} >left</button>
            <button onClick={() => setRight(currentImageIndex)}>Right</button>
            <div style={{ position: 'relative' }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                <div style={{ position: 'absolute' }}>
                    {images && images[0] ? <Image url={images[0].url} alt={images[0].title} classN={addClass(currentImageIndex, 0, initialImageIndex)} id={addId(currentImageIndex, 0, initialImageIndex)} /> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                    {images && images[1] ? <Image url={images[1].url} alt={images[1].title} classN={addClass(currentImageIndex, 1, initialImageIndex)} id={addId(currentImageIndex, 1, initialImageIndex)} /> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                    {images && images[2] ? <Image url={images[2].url} alt={images[2].title} classN={addClass(currentImageIndex, 2, initialImageIndex)} id={addId(currentImageIndex, 2, initialImageIndex)} /> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                    {images && images[3] ? <Image url={images[3].url} alt={images[3].title} classN={addClass(currentImageIndex, 3, initialImageIndex)} id={addId(currentImageIndex, 3, initialImageIndex)} /> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                    {images && images[4] ? <Image url={images[4].url} alt={images[4].title} classN={addClass(currentImageIndex, 4, initialImageIndex)} id={addId(currentImageIndex, 4, initialImageIndex)} /> : ""}
                </div>
                <div style={{ position: 'absolute' }}>
                    {images && images[5] ? <Image url={images[5].url} alt={images[5].title} classN={addClass(currentImageIndex, 5, initialImageIndex)} id={addId(currentImageIndex, 5, initialImageIndex)} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Swiper
