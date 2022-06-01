import React from 'react'
import Image from '../Image'

interface SwiperContentProps {
  images: Array<{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }>;
  onTouchStart: any;
  onTouchMove: any;
  onTouchEnd: any;
  addClass: (current: number, index: number, initial: number) => string;
  currentImageIndex: number;
  initialImageIndex: number;
  addId:  (current: number, index: number, initial: number) => string;
}

function SwiperContent(props: SwiperContentProps) {
  return (<div className='swiperContent'>
    <div className='swiperContentBody' onTouchStart={props.onTouchStart} onTouchMove={props.onTouchMove} onTouchEnd={props.onTouchEnd}>
      <div className='swiperContentImage'>
        {props.images && props.images[0] ? <Image wrapperClass={'swiperContentImageWrapper'} url={props.images[0].url} alt={props.images[0].title} imageClass={props.addClass(props.currentImageIndex, 0, props.initialImageIndex)} id={props.addId(props.currentImageIndex, 0, props.initialImageIndex)} /> : ""}
      </div>
      <div className='swiperContentImage'>
        {props.images && props.images[1] ? <Image wrapperClass={'swiperContentImageWrapper'} url={props.images[1].url} alt={props.images[1].title} imageClass={props.addClass(props.currentImageIndex, 1, props.initialImageIndex)} id={props.addId(props.currentImageIndex, 1, props.initialImageIndex)} /> : ""}
      </div>
      <div className='swiperContentImage'>
        {props.images && props.images[2] ? <Image wrapperClass={'swiperContentImageWrapper'} url={props.images[2].url} alt={props.images[2].title} imageClass={props.addClass(props.currentImageIndex, 2, props.initialImageIndex)} id={props.addId(props.currentImageIndex, 2, props.initialImageIndex)} /> : ""}
      </div>
      <div className='swiperContentImage'>
        {props.images && props.images[3] ? <Image wrapperClass={'swiperContentImageWrapper'} url={props.images[3].url} alt={props.images[3].title} imageClass={props.addClass(props.currentImageIndex, 3, props.initialImageIndex)} id={props.addId(props.currentImageIndex, 3, props.initialImageIndex)} /> : ""}
      </div>
      <div className='swiperContentImage'>
        {props.images && props.images[4] ? <Image wrapperClass={'swiperContentImageWrapper'} url={props.images[4].url} alt={props.images[4].title} imageClass={props.addClass(props.currentImageIndex, 4, props.initialImageIndex)} id={props.addId(props.currentImageIndex, 4, props.initialImageIndex)} /> : ""}
      </div>
      <div className='swiperContentImage'>
        {props.images && props.images[5] ? <Image wrapperClass={'swiperContentImageWrapper'} url={props.images[5].url} alt={props.images[5].title} imageClass={props.addClass(props.currentImageIndex, 5, props.initialImageIndex)} id={props.addId(props.currentImageIndex, 5, props.initialImageIndex)} /> : ""}
      </div>
    </div>
  </div>)
}

export default SwiperContent
