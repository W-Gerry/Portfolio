import "./SportPhotoCarousel.scss";

interface SportPhotoCarouselProps {
  isVisible: boolean;
}

const SportPhotoCarousel = ( {isVisible} : SportPhotoCarouselProps) => {
  return (
    <p className={`Placeholder ${isVisible && `Placeholder-visible`}`}>Placeholder for carousel</p>
  )
}

export default SportPhotoCarousel;