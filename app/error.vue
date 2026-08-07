<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

useHead({
  title: `${props.error.status} — ${props.error.message ?? "Error"}`,
});
</script>

<template>
  <UApp>
    <UError
      icon="i-lucide-file-x"
      :error="error"
      :clear="{
        color: 'primary',
        variant: 'solid',
        size: 'xl',
        icon: 'i-lucide-arrow-left',
        label: 'Back to home',
      }"
    />
  </UApp>
</template>
