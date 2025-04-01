import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/star-rating"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Link2, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function ReviewPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline">Smartphones</Badge>
              <Badge variant="outline">Apple</Badge>
              <Badge variant="outline">Flagship</Badge>
            </div>
            <h1 className="text-3xl font-bold mb-2">iPhone 15 Pro Max Review: The Ultimate Smartphone Experience</h1>
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={4.5} size="lg" />
              <span className="text-muted-foreground">Published: October 15, 2023</span>
            </div>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">Senior Tech Editor</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=1200" alt="iPhone 15 Pro Max" fill className="object-cover" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="lead">
              Apple's latest flagship brings impressive camera improvements, better battery life, and the powerful A17
              Pro chip. Is it worth the upgrade?
            </p>

            <p>
              The iPhone 15 Pro Max represents Apple's most ambitious smartphone to date, pushing the boundaries of
              what's possible in a device that fits in your pocket. With its titanium frame, the phone is noticeably
              lighter than its predecessor while maintaining the premium feel Apple products are known for.
            </p>

            <h2>Design and Build Quality</h2>
            <p>
              The switch to titanium from stainless steel is immediately noticeable when you pick up the iPhone 15 Pro
              Max. It's approximately 10% lighter than the iPhone 14 Pro Max, which makes a significant difference in
              day-to-day use. The new material also gives the phone a slightly different finish that's less prone to
              fingerprints.
            </p>

            <p>
              Apple has also refined the edges of the device, making them more comfortable to hold. The Action Button,
              which replaces the traditional mute switch, is a welcome addition that can be customized to perform
              various functions.
            </p>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="iPhone 15 Pro Max Front"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="iPhone 15 Pro Max Back"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2>Display</h2>
            <p>
              The 6.7-inch Super Retina XDR display continues to be one of the best screens on any smartphone. The
              ProMotion technology provides smooth scrolling with its 120Hz refresh rate, and the peak brightness has
              been increased to 2,000 nits, making it easier to view in direct sunlight.
            </p>

            <h2>Performance</h2>
            <p>
              Powered by the A17 Pro chip, the iPhone 15 Pro Max sets new benchmarks for smartphone performance. This is
              the first 3nm chip in a smartphone, and the efficiency gains are evident in both speed and battery life.
              In our testing, the phone handled everything from intensive gaming to 4K video editing without breaking a
              sweat.
            </p>

            <h2>Camera System</h2>
            <p>
              The camera system receives a significant upgrade with a new 48MP main sensor that captures more detail and
              performs better in low light. The telephoto lens now offers 5x optical zoom, matching competitors like the
              Samsung Galaxy S23 Ultra. The ultrawide camera has also been improved with better low-light performance.
            </p>

            <p>
              Video capabilities remain industry-leading, with the ability to shoot 4K60 ProRes video directly to
              external storage via the USB-C port. The new Cinematic mode enhancements provide more professional-looking
              results with improved depth effects.
            </p>

            <h2>Battery Life and Charging</h2>
            <p>
              Battery life has been improved by approximately 2 hours compared to the iPhone 14 Pro Max, easily lasting
              a full day of heavy use. The switch to USB-C is a welcome change, allowing for faster charging and
              compatibility with a wider range of accessories.
            </p>

            <h2>Software</h2>
            <p>
              iOS 17 introduces several quality-of-life improvements, including enhanced messaging features, a new
              Journal app, and more customization options. The software experience remains smooth and intuitive, with
              Apple's commitment to long-term updates ensuring the phone will stay current for years to come.
            </p>

            <h2>Verdict</h2>
            <p>
              The iPhone 15 Pro Max is the most complete smartphone Apple has ever made. While the high price tag of
              $1,199 for the base 256GB model will deter some buyers, those who invest in this device will be rewarded
              with cutting-edge technology that should remain competitive for years to come.
            </p>

            <p>
              For iPhone 14 Pro users, the upgrade may not be essential unless the improved camera system or USB-C port
              are must-have features. However, for those coming from older models, the iPhone 15 Pro Max represents a
              significant leap forward in nearly every aspect.
            </p>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Helpful (45)
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsDown className="mr-2 h-4 w-4" />
                Not Helpful (3)
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <div>
            <h2 className="text-2xl font-bold mb-6">Comments (12)</h2>

            <div className="mb-6">
              <Textarea placeholder="Write a comment..." className="mb-2" />
              <Button>Post Comment</Button>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((comment) => (
                <div key={comment} className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">User Name</div>
                      <div className="text-sm text-muted-foreground">2 days ago</div>
                    </div>
                  </div>
                  <p className="mb-2">
                    Great review! I've been using the iPhone 15 Pro Max for a week now and completely agree with your
                    assessment of the camera system. The 5x zoom is a game-changer for me.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-foreground">
                      <ThumbsUp className="h-3 w-3" /> 8
                    </button>
                    <button className="flex items-center gap-1 hover:text-foreground">
                      <MessageSquare className="h-3 w-3" /> Reply
                    </button>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                Load More Comments
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">iPhone 15 Pro Max</h3>
                    <p className="text-muted-foreground">Starting at $1,199</p>
                  </div>
                  <StarRating rating={4.5} />
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Processor:</span>
                      <div>A17 Pro</div>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">RAM:</span>
                      <div>8GB</div>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Storage:</span>
                      <div>256GB - 1TB</div>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Display:</span>
                      <div>6.7" OLED</div>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Battery:</span>
                      <div>4,422 mAh</div>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">OS:</span>
                      <div>iOS 17</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Pros</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Exceptional camera system
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Powerful A17 Pro processor
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Lighter titanium design
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      USB-C port
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Improved battery life
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 mt-4">
                  <h4 className="font-medium">Cons</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      Expensive
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      No charger in box
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      Limited customization compared to Android
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Button className="w-full">Check Price</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Related Reviews</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Related product"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">
                          <Link href="#" className="hover:underline">
                            Samsung Galaxy S23 Ultra Review: The Android Flagship to Beat
                          </Link>
                        </h4>
                        <div className="flex items-center mt-1">
                          <StarRating rating={4.2} size="sm" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">iPhone</Badge>
                  <Badge variant="secondary">Apple</Badge>
                  <Badge variant="secondary">Smartphones</Badge>
                  <Badge variant="secondary">iOS 17</Badge>
                  <Badge variant="secondary">Camera</Badge>
                  <Badge variant="secondary">A17 Pro</Badge>
                  <Badge variant="secondary">USB-C</Badge>
                  <Badge variant="secondary">Titanium</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

