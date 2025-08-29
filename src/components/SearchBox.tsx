"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="flex items-center gap-2 w-full max-w-md">
      <Input type="text" placeholder="Search products..." className="flex-1" />
      <Button type="submit" className="flex items-center gap-1">
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
      </Button>
    </div>
  );
}
