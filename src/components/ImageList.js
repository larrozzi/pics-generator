import React from 'react'

const ImageList = (props) => {
    const images= props.images.map(({description,id,urls}) =>{
        return <img alt= {description} key ={id} src ={urls.small}/> //key always goes into the root element that's being returned from a list
    })
    return <div> {images}</div>
}

export default ImageList

  