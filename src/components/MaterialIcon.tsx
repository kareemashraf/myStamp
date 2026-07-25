interface MaterialIconProps {
  name: string;
  className?: string;
  filled?: boolean;
  size?: number;
}

export default function MaterialIcon({ name, className = "", filled = false, size }: MaterialIconProps) {
  const fillSettings = filled ? "'FILL' 1" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24";
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: fillSettings, ...(size ? { fontSize: size } : {}) }}
    >
      {name}
    </span>
  );
}
