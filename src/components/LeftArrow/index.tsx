import React from 'react'
import './styles.scss'


interface ArrowProps {
    currentImageIndex: number;
    setLeft: (currentImageIndex: number) => void
}


function LeftArrow(props: ArrowProps) {
  return (
    <div className='arrowContainer' onClick={() => props.setLeft(props.currentImageIndex)}><i className="arrow left"></i></div>
  )
}

export default LeftArrow
