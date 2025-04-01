import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/star-rating"
import { SearchBar } from "@/components/search-bar"
import { FeaturedReview } from "@/components/featured-review"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover the Best in Tech</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Unbiased reviews, ratings, and insights on the latest technology products.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/reviews">Browse Reviews</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">Explore Categories</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <SearchBar />
          </div>
        </div>

        <FeaturedReview />
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Latest Reviews</h2>
          <Button variant="ghost" asChild>
            <Link href="/reviews">View All</Link>
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="smartphones">Smartphones</TabsTrigger>
            <TabsTrigger value="laptops">Laptops</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
            <TabsTrigger value="wearables">Wearables</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <ReviewCard key={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="smartphones" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <ReviewCard key={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="laptops" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <ReviewCard key={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <ReviewCard key={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wearables" className="space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <ReviewCard key={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Popular Categories</h2>
          <Button variant="ghost" asChild>
            <Link href="/categories">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CategoryCard title="Smartphones" count={42} image="/short_logo.svg" />
          <CategoryCard title="Laptops" count={38} image="/short_logo.svg" />
          <CategoryCard title="Audio" count={27} image="/short_logo.svg" />
          <CategoryCard title="Wearables" count={19} image="/short_logo.svg" />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Trending Topics</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className="px-3 py-1 text-sm">AI Technology</Badge>
          <Badge className="px-3 py-1 text-sm">Foldable Phones</Badge>
          <Badge className="px-3 py-1 text-sm">Gaming Laptops</Badge>
          <Badge className="px-3 py-1 text-sm">Wireless Earbuds</Badge>
          <Badge className="px-3 py-1 text-sm">Smart Home</Badge>
          <Badge className="px-3 py-1 text-sm">VR Headsets</Badge>
          <Badge className="px-3 py-1 text-sm">Mechanical Keyboards</Badge>
          <Badge className="px-3 py-1 text-sm">Fitness Trackers</Badge>
        </div>
      </section>
    </div>
  )
}

function ReviewCard() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full m-4">
          <Image
            src="/short_logo.svg"
            alt="Product image"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-2 left-2">
            <Badge>New</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-6">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">Smartphones</Badge>
          <StarRating rating={4.5} />
        </div>
        <CardTitle className="mb-2 line-clamp-2">
          <Link href="/reviews/product-name" className="hover:underline">
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
            <Avatar>
              <AvatarImage src="/short_logo.svg" alt="Author" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">John Doe</span>
          </div>
          <span className="text-sm text-muted-foreground">2 days ago</span>
        </div>
      </CardFooter>
    </Card>
  )
}

function CategoryCard({ title, count, image }: { title: string; count: number; image: string }) {
  return (
    <Link href={`/categories/${title.toLowerCase()}`}>
      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
        <div className="relative h-32 m-4">
          <Image src={image || "/short_logo.svg"} alt={title} fill className="object-cover rounded-lg" />
        </div>
        <CardContent className="p-4">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{count} reviews</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

