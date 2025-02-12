<template>
    <v-switch
      v-model="isDark"
      label="Светлая тема"
      color="primary"
      @change="toggleTheme"
    ></v-switch>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDark: this.$vuetify.theme.dark // Получаем текущее состояние темы
      };
    },
    methods: {
      toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark; // Переключаем тему
        this.saveThemePreference(); // Сохраняем предпочтения пользователя
      },
      saveThemePreference() {
        localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light'); // Сохраняем в localStorage
      }
    },
    mounted() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  };
  </script>