import { Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

const SideBarNav: NextPage = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink title="Dashboard" href="/dashboard" icon={RiDashboardLine} />
        <NavLink icon={RiContactsLine} href="/users" title="Usuários" />
      </NavSection>
      <NavSection title="Automação">
        <Stack spacing="4" mt="8" align="stretch">
          <NavLink title="Formulários" href="/forms" icon={RiInputMethodLine} />
          <NavLink title="Automação" href="/automation" icon={RiGitMergeLine} />
        </Stack>
      </NavSection>
    </Stack>
  );
};

export default SideBarNav;
