import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { ElementType } from "react";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  title: string;
  href: string;
}

const NavLink: NextPage<NavLinkProps> = ({ icon, title, href, ...rest }) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export default NavLink;
