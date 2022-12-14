import React, { useState } from "react";
import { Button, Drawer, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export function Login({ opened, setOpened }) {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  function handleSubmit(values){
    try {
        Meteor.loginWithPassword(values.username, values.password)
    } catch (error) {
        if (error){
            console.log("erreur", error);
        }
    }
  }

  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      title="Login"
      padding="xl"
      size="xl"
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          placeholder="Nom d'utilisateur"
          {...form.getInputProps("username")}
        />

        <PasswordInput
          placeholder="Mot de passe"
          id="password"
          {...form.getInputProps("password")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Connexion</Button>
        </Group>
      </form>
    </Drawer>
  );
}
