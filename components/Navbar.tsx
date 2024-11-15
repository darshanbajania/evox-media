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

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
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
      <NavbarContent justify="end" className="gap-10">
        <NavbarItem>
          <Link color="foreground" href="/#about-us">
            <p className="text-[1.1rem]">Advertise with Us</p>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/drivers">
            <p className="text-[1.1rem]">Rider Sign Up</p>
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="/#how-it-works">
            Company
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" href="/blogs">
            <p className="text-[1.1rem]">Blogs</p>
          </Link>
        </NavbarItem>
        <a href="https://forms.gle/b29CLTnPZAxxd8XQ9" target="_blank">
          <CallToAction label={"Advertise With Us"} />
        </a>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
};

export default Navbar;
