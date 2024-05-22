interface CustomLinkProps {
  className?: string;
  href: string;
  text: string;
}

export default function CustomLink({ className, href, text }: CustomLinkProps) {
  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
}
