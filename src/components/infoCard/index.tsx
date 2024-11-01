import './style.scss'

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
}

export function InfoCard({ title, description, image }: InfoCardProps) {
  return (
    <div className="info-card-container">
      <img src={image} alt="image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}