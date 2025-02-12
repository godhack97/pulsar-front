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
  props: ['tasks'], // Принимаем массив задач из родительского компонента
  methods: {
    async deleteTask(id) {
      try {
        await this.$axios.$delete(`/tasks/${id}`);
        this.$emit('task-deleted'); // Сообщаем родительскому компоненту об удалении задачи
      } catch (error) {
        console.error('Ошибка удаления задачи:', error);
      }
    }
  }
};
</script>