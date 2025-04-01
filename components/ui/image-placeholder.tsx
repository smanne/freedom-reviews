import { ImageIcon } from "lucide-react"

interface ImagePlaceholderProps {
  className?: string
}

export function ImagePlaceholder({ className }: ImagePlaceholderProps) {
  return (
    <div className={`flex items-center justify-center w-full h-full bg-muted/30 rounded-lg ${className}`}>
      <div className="flex flex-col items-center gap-2">
        <ImageIcon className="w-8 h-8 text-muted-foreground/50" />
        <p className="text-xs text-muted-foreground">No image available</p>
      </div>
    </div>
  )
} 