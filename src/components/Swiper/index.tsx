import React from 'react'
import Image from '../Image'
import './styles.scss'
import { getImages } from '../../api'
import LeftArrow from '../LeftArrow';
import RightArrow from '../RightArrow';
import SwiperContent from '../SwiperContent';
import MultipleSliderView from '../MultipleSliderView';

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
    const minSwipeDistance = 50

    const onTouchStart = (e: any) => {
        setTouchEnd(null)
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
        }
    }

    const [direction, setDirection] = React.useState<string | null>('left')

    const browseImages = async () => {
        let imagesData = await getImages()
        let data = Array.isArray(imagesData) ? imagesData : []
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

    const handleGetImageClicked = (index: number) => {
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
            <div className='title'>MASTER WiZR Modules</div>
            <MultipleSliderView images={images}
                handleGetImageClicked={handleGetImageClicked} />
            <div className='swiperContentContainer'>
                <div>
                    <LeftArrow setLeft={setLeft} currentImageIndex={currentImageIndex} />
                </div>
                <SwiperContent images={images}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    addClass={addClass}
                    currentImageIndex={currentImageIndex}
                    initialImageIndex={initialImageIndex}
                    addId={addId}
                />
                <div>
                    <RightArrow setRight={setRight} currentImageIndex={currentImageIndex} />
                </div>
            </div>
        </div>
    )
}

export default Swiper
