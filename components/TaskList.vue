<template>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">Удалить</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: ['tasks'],
    methods: {
      async deleteTask(id) {
        await this.$axios.$delete(`/api/tasks/${id}`);
        this.$emit('task-deleted');
      }
    }
  };
  </script>