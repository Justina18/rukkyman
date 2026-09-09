interface SprocketRailProps {
  className?: string;
}
export default function SprocketRail({ className = "" }: SprocketRailProps) {
  return (
    <div
      className={`sprocket-rail w-3 shrink-0 opacity-60 ${className}`}
      aria-hidden="true"
    />
  );
}
