import './PhotoViewer.css';


// declare and export new function called 'PhotoViewer'
export function MainPhotoViewer( {selectedImageUrl} ) {    
    return (  
        <>                           
            <img className="image" src={selectedImageUrl}/>
        </>
    );
}