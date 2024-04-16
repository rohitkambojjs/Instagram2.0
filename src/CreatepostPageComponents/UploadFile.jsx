import React from 'react'
import { useSelector } from 'react-redux'

function UploadFile() {
  const image = useSelector((state) => state.post.previewUrl)
  return (
    <>
    {image && <img src={image} alt="" />}
    </>
  )
}

export default UploadFile
