import './Photoviewer.css'

import { MainPhotoViewer } from '../components/photoviewer/MainPhotoViewer/MainPhotoViewer'
import { GalleryViewer } from '../components/photoviewer/GalleryViewer/GalleryViewer'
import { useState } from 'react'

interface GalleryViewerProps {
    setSelectedImageUrl: (imageUrl: string) => void;
  }

function PhotoViewer() {
  const [selectedImageUrl, setSelectedImageUrl] = useState("https://picsum.photos/id/600/1600/900.jpg");

  return (
    <>
      <div className="gallery-wrapper">
            <h1>React Photo Viewer</h1>
            <p>Selected image: {selectedImageUrl}</p>
            <MainPhotoViewer selectedImageUrl={selectedImageUrl}/>
            <GalleryViewer setSelectedImageUrl={setSelectedImageUrl}/>
      </div>
    </>
  )
}

export default PhotoViewer
