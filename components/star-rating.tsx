import { Star, StarHalf } from "lucide-react"

interface StarRatingProps {
  rating: number
  max?: number
  size?: "sm" | "md" | "lg"
}

export function StarRating({ rating, max = 5, size = "sm" }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  const sizeClass = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`star-${i}`} className={`${sizeClass[size]} fill-primary text-primary`} />
      ))}

      {hasHalfStar && <StarHalf className={`${sizeClass[size]} fill-primary text-primary`} />}

      {Array.from({ length: max - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
        <Star key={`empty-star-${i}`} className={`${sizeClass[size]} text-muted-foreground`} />
      ))}

      <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  )
}

