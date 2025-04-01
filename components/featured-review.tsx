import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/star-rating"
import { ArrowRight } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function FeaturedReview() {
  return (
    <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-full m-4">
          <Image src="/short_logo.svg" alt="Featured product" fill className="object-cover rounded-lg" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        </div>
        <div className="p-6 flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="outline">Laptops</Badge>
            <StarRating rating={4.8} size="md" />
          </div>

          <h3 className="text-2xl font-bold mb-2">
            <Link href="/reviews/macbook-pro-m3" className="hover:underline">
              MacBook Pro M3 Max Review: The Ultimate Creator's Laptop
            </Link>
          </h3>

          <p className="text-muted-foreground mb-4 flex-grow">
            Apple's latest professional laptop redefines performance with the M3 Max chip, delivering unprecedented
            power efficiency and creative capabilities. Is this the best laptop for content creators in 2023?
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/short_logo.svg" alt="Author" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <span className="text-sm">Sarah Johnson</span>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/reviews/macbook-pro-m3" className="flex items-center gap-1">
                Read Review <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

