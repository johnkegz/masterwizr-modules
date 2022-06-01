import React from 'react'
import Image from '../Image';

interface image {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface MultipleSliderView {
    images: Array<image>;
    handleGetImageClicked: (index: number) => void;
}

function MultipleSliderView(props: MultipleSliderView) {
  return (<div  className='multipleSliderViewContainer'>
  <div className='multipleSliderView'>
      {
          props.images.map((image: image, index: number) => <div key={image.id}>
              <div className='singleImage' 
               onClick={() => props.handleGetImageClicked(index)}
              >
              <Image
                  url={image.thumbnailUrl}
                  wrapperClass={'wrapper'}
                  imageClass={'imageContainer'}
                  alt={image.title}
              />
              <div className='singleImageWrapper'>
              
              </div>
              </div>
              <div className='thumbnailTitles'>{image.title.split(" ")[0]}</div>
          </div>)
      }
  </div>
</div>
  )
}

export default MultipleSliderView