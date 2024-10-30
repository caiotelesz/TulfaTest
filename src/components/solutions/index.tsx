import './style.scss';

interface SolutionItemProps {
  imageSrc: string;
  title: string;
  logoSrc: string;
  isSpecial?: boolean;
}

export function Solutions({ imageSrc, title, logoSrc, isSpecial }: SolutionItemProps) {
  return (
    <div className='solutions-item'>
      <div className='solutions-image-container'>
        <img src={imageSrc} alt="Solution image" />

        <div className='solutions-logo-container'>
          <img src={logoSrc} alt="Logo" />
          <h3 className={isSpecial ? 'special-title' : ''}>{title}</h3>
        </div>
      </div>
    </div>
  );
}
