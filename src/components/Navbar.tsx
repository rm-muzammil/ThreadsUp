import { brandData } from "@/data/siteConfig";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import SearchBox from "./SearchBox";
import { Button } from "./ui/button";
import { ShoppingCart, User } from "lucide-react";
import Container from "./Container";

function Navbar() {
  return (
    <Container>
      <div className="md:flex justify-between items-center h-[3rem] md:my-[1.5rem]  ">
        <div className="font-extrabold tracking-tighter text-[2rem]">
          {brandData.name}
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              {/* Dropdown Item */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-48">
                    <NavigationMenuLink className="hover:underline">
                      Men
                    </NavigationMenuLink>
                    <NavigationMenuLink className="hover:underline">
                      Women
                    </NavigationMenuLink>
                    <NavigationMenuLink className="hover:underline">
                      Kids
                    </NavigationMenuLink>
                    <NavigationMenuLink className="hover:underline">
                      Accessories
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple Links */}
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:underline">
                  On Sale
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:underline">
                  New Arrivals
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:underline">
                  Brands
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <SearchBox />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Profile">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
