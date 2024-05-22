interface InfoProps {
  src: string;
  title: string;
  extraClass: string;
}

export default function TechStackMenuItem({
  src,
  title,
  extraClass,
}: InfoProps) {
  return (
    <div className={`services-tech-stack-menu-item ${extraClass}`}>
      <img
        className="services-tech-image"
        src={src}
        alt={title || "Tech Stack Item"}
      />
      {title && <span className="services-tech-stack-menu-title">{title}</span>}
    </div>
  );
}
