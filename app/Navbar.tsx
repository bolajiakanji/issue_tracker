"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import { Box, Container } from "@radix-ui/themes";
import { Flex } from "@radix-ui/themes";

const Navbar = () => {
  const { status, data: session } = useSession()
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="  border-b mb-5 h-14  p-4">
      <Container>
      <Flex justify='between'>
        <Flex align='center' gap='3'>
        <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              href={link.href}
              >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
        </Flex>
              <Box>
                {status === "authenticated" && (
                  <Link href='/api/auth/signout'>Log Out</Link>
                )}
                {status === "unauthenticated" && (
                  <Link href='/api/auth/signin'>Log In</Link>
                )}
                
            </Box>
            
        

        </Flex>
        </Container>
      </nav>
  );
};

export default Navbar;
