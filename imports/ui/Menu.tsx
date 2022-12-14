import React, { useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Avatar,
} from "@mantine/core";
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconCalendarStats,
  IconUser,
  IconLogout,
  IconSwitchHorizontal,
  IconAward,
  IconBackpack,
  IconPalette,
} from "@tabler/icons";
import { Login } from "./Login";
import { useTracker } from "meteor/react-meteor-data";
import { showNotification } from "@mantine/notifications";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Accueil" },
  { icon: IconBackpack, label: "Mes compétences" },
  { icon: IconAward, label: "Mes expériences" },
  { icon: IconPalette, label: "Mes créations" },
  { icon: IconUser, label: "Gestion des utilisateurs", admin: true},
  { icon: IconGauge, label: "Stats", admin: true },
];

export function Menu({ active, setActive }) {
  const [opened, setOpened] = useState(false);
  const user = useTracker(() => Meteor.user());

  const links = mockdata.map((link, index) => {
    if ((link.admin && user?.username === "admin") || !link.admin)
    return <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  });

  function handleLogout(){
    Meteor.logout()
    showNotification({
      title: "Deconnexion réussie",
      message: `À bientôt ${user?.username} ! 👋🏻`,
      color: "orange"
    })
  }

  return (
    <>
      <Login opened={opened} setOpened={setOpened} />
      <Navbar width={{ base: 80 }} p="md">
        <Center>
          <Avatar color="cyan" radius="xl">{user?.username?.substring(0,2).toUpperCase()}</Avatar>
        </Center>
        <Navbar.Section grow mt={50}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack justify="center" spacing={0}>
            <NavbarLink
              icon={IconSwitchHorizontal}
              label="Change account"
              onClick={() => setOpened(true)}
            />
            {user && (
              <NavbarLink
                icon={IconLogout}
                label="Logout"
                onClick={() => handleLogout()}
              />
            )}
          </Stack>
        </Navbar.Section>
      </Navbar>
    </>
  );
}
