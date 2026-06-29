import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const dimensions = {
    sm: { width: 80, height: 40 },
    md: { width: 110, height: 55 },
    lg: { width: 150, height: 75 },
  };

  const { width, height } = dimensions[size];

  return (
    <Image
      src="/logo.png"
      alt="Edgetel Technology & Networks Ltd."
      width={width}
      height={height}
      unoptimized
      className={`object-contain ${className ?? ""}`}
      priority
    />
  );
}