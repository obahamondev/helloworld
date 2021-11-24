<script setup>
import { Authenticator } from "@aws-amplify/ui-vue/dist/components/Authenticator";
import "@aws-amplify/ui-vue/styles.css";
import Amplify from "@aws-amplify/";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
</script>
<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.name }}</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>
