<template>
  <div>
    <v-btn @click="toggleForm" class="addTaskButton" icon x-large><v-icon>mdi-plus</v-icon></v-btn>
    <task-form ref="taskForm" @task-created="fetchTasks" />
    <task-list :tasks="tasks" @task-deleted="fetchTasks" />
  </div>
</template>

<style>
.addTaskButton {
  position: absolute;
  float: left;
  bottom: 20px;
  left: 20px;
  background: #272727;
}
</style>

<script>
import TaskForm from '~/components/TaskForm.vue';
import TaskList from '~/components/TaskList.vue';
import ThemeSwitcher from '~/components/ThemeSwitcher.vue';

export default {
  async fetch() {
    await this.$store.dispatch('setTitle', 'Tasks');
  },
  middleware: 'authenticated',
  components: { TaskForm, TaskList, ThemeSwitcher },
  data() {
    return {
      tasks: []
    };
  },
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get('/tasks');
      return { tasks: response };
    } catch (error) {
      console.error('Ошибка получения задач:', error);
      return { tasks: [] };
    }
  },
  methods: {
    toggleForm() {
      this.$refs.taskForm.toggleForm();
    },
    fetchTasks() {
      this.$axios.$get('/tasks').then((data) => {
        this.tasks = data;
      });
    }
  }
};
</script>