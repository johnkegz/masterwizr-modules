import React from 'react'
import './styles.scss'

interface ArrowProps {
    currentImageIndex: number;
    setRight: (currentImageIndex: number) => void
}

function RightArrow(props: ArrowProps) {
  return (
    <div className='arrowContainer' onClick={() => props.setRight(props.currentImageIndex)}><i className="arrow right"></i></div>
  )
}

export default RightArrow
