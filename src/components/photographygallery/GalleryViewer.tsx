import "./GalleryViewer.scss"

interface GalleryViewerProps {
  setSelectedImage: (image: string) => void;
  photoImages: string[];
}


export function GalleryViewer ({setSelectedImage, photoImages}:GalleryViewerProps) {
  return (
    <>
      <div className="thumbnail-gallery-wrapper">
        <h2>Select an Image</h2>
        <div className="thumbnail-gallery">
          {photoImages.map((image, index) =>
            <img
              id={index.toString()}
              className="thumbnail"
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
