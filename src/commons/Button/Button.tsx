import "./Button.css";

interface ButtonProps {
  variant: string;
  size: string;
  title: string;
}

export default function Button({ size, variant, title }: ButtonProps) {
  const content = title;

  return (
    <button
      className={`ud-button
       ${size === "small" ? "text-base" : ""}
        ${size === "medium" ? "text-xl" : ""}
        ${size === "large" ? "text-3xl" : ""}
        ${size === "extra-large" ? "text-5xl" : ""}
         ${variant === "primary" ? "bg-primary text-white" : ""}
        ${variant === "secondary" ? "bg-secondary text-black" : ""}
        ${variant === "tertiary" ? "bg-tertiary text-white" : ""}
        ${variant === "custom" ? "bg-custom text-white" : ""}
      `}
    >
      {content}
    </button>
  );
}
