"use client"

import React from "react"
import Image from "next/image"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search, Menu, User } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-heading font-semibold">
                  Home
                </Link>
                <Link href="/reviews" className="text-lg font-heading font-semibold">
                  Reviews
                </Link>
                <Link href="/categories" className="text-lg font-heading font-semibold">
                  Categories
                </Link>
                <Link href="/about" className="text-lg font-heading font-semibold">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-heading font-semibold">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="hidden md:flex items-center space-x-2">
            <Image src="/logo.svg" alt="Freedom" width={205} height={100} className="h-12 w-auto max-w-[180px]" />
          </Link>

          <Link href="/" className="md:hidden flex items-center space-x-2">
            <Image src="/short_logo.svg" alt="Freedom" width={100} height={100} className="h-10 w-auto" />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="font-heading">
              <NavigationMenuItem>
                <Link href="/reviews" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Reviews</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <ListItem key={category.title} title={category.title} href={category.href}>
                        {category.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          {showSearch ? (
            <div className="relative w-full max-w-sm">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pr-8"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)} className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">Register</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-heading font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

const categories = [
  {
    title: "Smartphones",
    href: "/categories/smartphones",
    description: "The latest and greatest mobile devices from Apple, Samsung, Google, and more.",
  },
  {
    title: "Laptops",
    href: "/categories/laptops",
    description: "From ultrabooks to gaming powerhouses, find the perfect portable computer.",
  },
  {
    title: "Audio",
    href: "/categories/audio",
    description: "Headphones, earbuds, speakers, and everything that produces sound.",
  },
  {
    title: "Wearables",
    href: "/categories/wearables",
    description: "Smartwatches, fitness trackers, and other tech you can wear.",
  },
  {
    title: "Smart Home",
    href: "/categories/smart-home",
    description: "Connected devices to make your home smarter and more convenient.",
  },
  {
    title: "Gaming",
    href: "/categories/gaming",
    description: "Consoles, accessories, and everything you need for the ultimate gaming setup.",
  },
]

