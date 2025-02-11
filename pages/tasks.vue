<template>
    <div>
      <h1>Список задач</h1>
      <task-form @task-created="fetchTasks" />
      <task-list :tasks="tasks" @task-deleted="fetchTasks" />
    </div>
  </template>
  
  <script>
  import TaskForm from '~/components/TaskForm.vue';
  import TaskList from '~/components/TaskList.vue';
  
  export default {
    components: { TaskForm, TaskList },
    data() {
      return {
        tasks: []
      };
    },
    async asyncData({ $axios }) {
      const tasks = await $axios.$get('/api/tasks');
      return { tasks };
    },
    methods: {
      fetchTasks() {
        this.$axios.$get('/api/tasks').then((data) => {
          this.tasks = data;
        });
      }
    }
  };
  </script>