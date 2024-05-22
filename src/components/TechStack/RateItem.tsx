interface InfoProps {
  src: string;
  text: string;
}

export default function RateItem({ src, text }: InfoProps) {
  return (
    <div className="services-tech-stack-rate-items">
      <img src={src} alt={text} />
      <p className="services-tech-stack-rate">{text}</p>
    </div>
  );
}
