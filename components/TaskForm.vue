<template>
    <form @submit.prevent="createTask">
      <input v-model="title" placeholder="Название задачи" />
      <textarea v-model="description" placeholder="Описание"></textarea>
      <button type="submit">Создать</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: ''
      };
    },
    methods: {
      async createTask() {
        await this.$axios.$post('/api/tasks', {
          title: this.title,
          description: this.description
        });
        this.$emit('task-created');
        this.title = '';
        this.description = '';
      }
    }
  };
  </script>