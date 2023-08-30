import { imageUrls } from "../ImageSelector/ImageSelector";
import "./GalleryViewer.css"

export function GalleryViewer ({setSelectedImageUrl}) {

    return (
        <>
            <div className="thumbnail-gallery-wrapper">
                <h1>All Images</h1>
                {/* <p>Selected image = {imageUrl}</p> */}
                <div className="thumbnail-gallery">
                    {imageUrls.map((url) => {
                        return <>
                            <img 
                                className="thumbnail"
                                src={url}
                                onClick={() => setSelectedImageUrl(url)}
                            />
                        </>
                    })}
                </div>
            </div>
        </>
    )
}
