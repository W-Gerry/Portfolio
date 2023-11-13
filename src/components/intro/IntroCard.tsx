import "./IntroCard.scss";

interface IntroCardProps {
  title: string;
  text: string;
}

const IntroCard = ( {title, text } : IntroCardProps) => {
  return (
    <div className="IntroCard">
      <h2 className="IntroCard__Title">{title}</h2>
      <p className="IntroCard__Text">{text}</p>
    </div>
  )
}

export default IntroCard;