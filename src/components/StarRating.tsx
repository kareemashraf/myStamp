import { Star } from "lucide-react";

interface StarRatingProps {
  count?: number;
  className?: string;
}

export default function StarRating({ count = 5, className = "" }: StarRatingProps) {
  return (
    <div className={`flex mb-4 text-[#004ac6] dark:text-blue-400 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#004ac6] dark:fill-blue-400 text-[#004ac6] dark:text-blue-400" />
      ))}
    </div>
  );
}
