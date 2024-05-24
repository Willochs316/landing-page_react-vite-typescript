interface InfoProps {
  src?: string;
  title?: string;
  extraClass: string;
  button?: JSX.Element;
}

export default function TechStackMenuItem({
  src,
  title,
  extraClass,
  button,
}: InfoProps) {
  return (
    <div className={`services-tech-stack-menu-item ${extraClass}`}>
      {src && (
        <img
          className="services-tech-image"
          src={src}
          alt={title || "Tech Stack Item"}
        />
      )}
      {button && button}
      {title && <span className="services-tech-stack-menu-title">{title}</span>}
    </div>
  );
}
