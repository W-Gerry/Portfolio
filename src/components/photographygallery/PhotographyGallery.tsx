import "./PhotographyGallery.scss"

import photoImages from "../../Data/photographyGalleryImages";
import { PhotoViewer } from "./PhotoViewer";
import { GalleryViewer } from "./GalleryViewer";

import { useState } from "react";

interface PhotoGalleryProps {
  isVisible: boolean;
}

const PhotographyGallery = ({ isVisible } : PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(photoImages[1]);

  return (
    <>
      <div className={`Gallery-wrapper ${isVisible && `Gallery-visible`}`}>
            <PhotoViewer selectedImage={selectedImage}/>
            <GalleryViewer 
              setSelectedImage={setSelectedImage}
              photoImages={photoImages}/>
      </div>
    </>
  )
}

export default PhotographyGallery;