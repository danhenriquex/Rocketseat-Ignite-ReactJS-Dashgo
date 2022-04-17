import { Box, Stack, Icon, Text, Link } from "@chakra-ui/react";
import { NextPage } from "next";
import { ReactNode } from "react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

const NavSection: NextPage<NavSectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export default NavSection;
