import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/Button";

import { Download, Search } from "lucide-react";
import { Input } from "@/components//ui/Input";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div>
            <Image
              src="/assets/images/logo.webp"
              width={107}
              height={24}
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-2">
            {/* Download app */}
            <Button variant="default" className="font-bold">
              <Download />
              Button
            </Button>
            <a href="#">
              <Image
                src="/assets/images/icon/login.svg"
                width={24}
                height={24}
                alt="login"
              />
            </a>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
            <Search size={20} strokeWidth={1.5} />
          </div>
          <Input
            type="text"
            placeholder="Tìm kiếm Hellobacsi"
            className="h-10 rounded-full px-10"
          />
        </div>
      </div>
    </header>
  );
}
