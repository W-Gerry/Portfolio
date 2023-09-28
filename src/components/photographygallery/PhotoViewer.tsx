import './PhotoViewer.scss';

interface PhotoViewerProps {
    selectedImage: string; 
}

export function PhotoViewer( {selectedImage}:PhotoViewerProps ) {    
    return (  
        <>                           
            <img className="image" src={selectedImage}/>
        </>
    );
}