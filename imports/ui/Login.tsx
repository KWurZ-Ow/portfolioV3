import React from "react";
import { Button, Drawer, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

export function Login({ opened, setOpened }) {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  function handleSubmit(values) {
    Meteor.loginWithPassword(values.username, values.password, (error) => {
      if (error) {
        let errorMsg = error.message;
        if (error.message.includes("User not found")) {
          errorMsg = `Nom d'utilisateur : "${values.username}" inconnu`;
          form.setErrors({ username: "Nom d'utilisateur inconnu" });
        }
        if (error.message.includes("Incorrect password")) {
          errorMsg = `Mot de passe incorrect`;
          form.setErrors({ password: "Mot de passe incorrect" });
        }
        if (error.message.includes("too many requests")) {
          errorMsg = `WOW ! Calmez-vous ! Attendez quelques secondes... 😵‍💫`;
        }
        showNotification({
          title: "Erreur !",
          message: errorMsg,
          color: "red",
        });
        console.log(error);
        setTimeout(() => {
          form.clearErrors();
        }, 4000);
      } else {
        setOpened(false);
        showNotification({
          title: "Connexion réussie",
          message: `Bienvenue ${values.username} ! 👋🏻`,
          color: "green",
        });
      }
      values.password = "";
    });
  }

  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      title="Login"
      padding="xl"
      size="xl"
      lockScroll={false}
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          required
          autoComplete="off"
          placeholder="Nom d'utilisateur"
          {...form.getInputProps("username")}
        />

        <PasswordInput
          required
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
