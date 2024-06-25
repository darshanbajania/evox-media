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
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NextUiNavbar
      maxWidth="full"
      position="sticky"
      classNames={{
        wrapper: ["max-w-[1282px]"],
      }}
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/#about-us">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#how-it-works">
            How It Works?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/for-advertisers/#contact-us">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Link href="/for-advertisers/#contact-us">
          <CallToAction label={"Join Now"} />
        </Link>
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
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
