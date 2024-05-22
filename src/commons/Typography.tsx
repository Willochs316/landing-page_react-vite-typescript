interface TypographyProps {
  className?: string;
  text: string;
}

export default function Typography({ text, className }: TypographyProps) {
  return <p className={className}>{text}</p>;
}
