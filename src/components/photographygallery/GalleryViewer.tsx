import "./GalleryViewer.scss"

interface GalleryViewerProps {
  setSelectedImage: (image: string) => void;
  photoImages: string[];
}


export function GalleryViewer ({setSelectedImage, photoImages}:GalleryViewerProps) {
  return (
    <>
      <div className="Thumbnail-gallery-wrapper">
        <h2 className="Thumbnail-gallery-header">Click an Image to Focus</h2>
        <div className="Thumbnail-gallery">
          {photoImages.map((image, index) =>
            <img
              id={index.toString()}
              className="Thumbnail"
              src={image}
              onClick={() => {
                setSelectedImage(image);
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
