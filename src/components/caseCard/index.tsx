import './style.scss';

interface CaseCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

export function CaseCard( { imgSrc, imgAlt, title }: CaseCardProps ) {
  return (
    <div className="case-card">
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
    </div>
  );
}