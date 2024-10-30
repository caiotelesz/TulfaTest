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
          <p className={isSpecial ? 'special-title' : ''}>{title}</p>
        </div>
      </div>
    </div>
  );
}
