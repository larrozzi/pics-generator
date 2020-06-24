import React from 'react'
import '../styles/imageList.css'
import ImageCard from './imageCard'

const ImageList = (props) => {
    const images= props.images.map((image)=>{
        return <ImageCard key ={image.id} image={image}/> //key always goes into the root element that's being returned from a list
    })
    return <div className="image-list"> {images}</div>
}

export default ImageList

  