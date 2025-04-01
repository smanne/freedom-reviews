import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/star-rating"
import { SearchBar } from "@/components/search-bar"
import Link from "next/link"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Product Reviews</h1>
          <p className="text-muted-foreground">Browse our comprehensive collection of technology product reviews</p>
        </div>
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Categories</h3>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <Label htmlFor={`category-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Brands</h3>
                  <div className="space-y-1">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={`brand-${brand}`} />
                        <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Price Range</h3>
                  <Slider defaultValue={[0, 1000]} min={0} max={2000} step={50} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">$0</span>
                    <span className="text-sm">$2000+</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Rating</h3>
                  <div className="space-y-1">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="flex items-center">
                          <StarRating rating={rating} /> & Up
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="rating-high">Highest Rated</SelectItem>
                  <SelectItem value="rating-low">Lowest Rated</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <ReviewCard key={item} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewCard() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Product image"
              fill
              className="object-cover rounded-t-lg"
              onError={(e) => {
                // Hide the errored image
                e.currentTarget.style.display = 'none';
                // Show the placeholder (it's already beneath the image)
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <ImagePlaceholder className="hidden" />
          </div>
          <div className="absolute top-2 left-2 z-10">
            <Badge>New</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">Smartphones</Badge>
          <StarRating rating={4.5} />
        </div>
        <CardTitle className="mb-2 line-clamp-2 font-heading">
          <Link href="/reviews/product-name" className="hover:underline font-heading">
            iPhone 15 Pro Max Review: The Ultimate Smartphone Experience
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          Apple's latest flagship brings impressive camera improvements, better battery life, and the powerful A17 Pro
          chip. Is it worth the upgrade?
        </CardDescription>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="Author"
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <ImagePlaceholder className="hidden" />
            </div>
            <span className="text-sm text-muted-foreground">John Doe</span>
          </div>
          <span className="text-sm text-muted-foreground">2 days ago</span>
        </div>
      </CardFooter>
    </Card>
  )
}

const categories = ["Smartphones", "Laptops", "Audio", "Wearables", "Smart Home", "Gaming", "Cameras", "Accessories"]

const brands = ["Apple", "Samsung", "Google", "Sony", "Microsoft", "Dell", "LG", "Asus"]

