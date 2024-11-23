"use client";
import React from "react";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "./Logo";
import CallToAction from "./CallToAction";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { formLinks } from "@/utils/forms";

const menuItems = [
  { label: "Advertise With Us", path: "/for-advertisers" },
  { label: "Ride Sign Up", path: "/drivers" },
  { label: "Blogs", path: "/blogs" },
];
const items = [
  {
    key: "for-drivers",
    label: "For Drivers",
  },
  {
    key: "for-advertisers",
    label: "For Advertisers",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const handleAction = (key: string) => {
    if (key === "for-drivers") {
      router.push("/drivers");
    }
    if (key === "for-advertisers") {
      router.push("/for-advertisers");
    }
  };
  return (
    <NextUiNavbar
      maxWidth="full"
      position="sticky"
      // classNames={{
      //   wrapper: ["max-w-[1282px]"],
      // }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <p className="font-bold text-inherit">Logo</p> */}
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/#about-us">
            Advertise with Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/drivers">
            Rider Sign Up
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/blogs">
            Blogs
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end" className=" gap-10">
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="/#about-us">
            <p className="text-[1.1rem]">Advertise with Us</p>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="/drivers">
            <p className="text-[1.1rem]">Rider Sign Up</p>
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="/#how-it-works">
            Company
          </Link>
        </NavbarItem> */}
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="/blogs">
            <p className="text-[1.1rem]">Blogs</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <a href={formLinks.advertiserEnquiry} target="_blank">
            <CallToAction label={"Advertise With Us"} />
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
};

export default Navbar;
