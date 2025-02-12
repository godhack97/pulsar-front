<template>
  <v-card class="taskForm" v-model="isFormVisible" :class="{ 'slide-in': isFormVisible, 'slide-out': !isFormVisible }">
    <v-form @submit.prevent="createTask">
      <div style="text-align: right;"><v-btn color="error" text @click="closeForm" icon
          large><v-icon>mdi-close</v-icon></v-btn></div>
      <v-text-field v-model="title" label="Name" required variant="solo-filled"></v-text-field>
      <v-textarea variant="solo-filled" v-model="description" label="Description"></v-textarea>
      <v-btn type="submit" color="primary">Create task</v-btn>
    </v-form>
  </v-card>
</template>

<style>
/* Анимация появления */
.slide-in {
  animation: slideIn 0.3s ease-in-out forwards;
}

/* Анимация исчезновения */
.slide-out {
  animation: slideOut 0.3s ease-in-out forwards;
}

/* Ключевые кадры для анимации появления */
@keyframes slideIn {
  from {
    transform: translateX(100%);
    /* Начальная позиция - за пределами экрана */
  }

  to {
    transform: translateX(0);
    /* Конечная позиция - на экране */
  }
}

/* Ключевые кадры для анимации исчезновения */
@keyframes slideOut {
  from {
    transform: translateX(0);
    /* Начальная позиция - на экране */
  }

  to {
    transform: translateX(100%);
    /* Конечная позиция - за пределами экрана */
  }
}

.taskForm {
  overflow: auto;
  padding: 20px;

}

@media (min-width:1250px) {
  .taskForm {
    width: 40vw;
    float: right;
    position: absolute;
    right: 0px;
    top: 10px;
    bottom: 10px;
  }
}

@media (max-width:1249px) {
  .taskForm {
    width: 80vw;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 10vw;
  }
}
</style>
<script>
export default {
  data() {
    return {
      isFormVisible: true, // Состояние видимости формы
      title: '',
      description: ''
    };
  },
  methods: {
    toggleForm() {
      console.log('Метод дочернего компонента был вызван!');
      this.isFormVisible = !this.isFormVisible;
    },
    closeForm() {
      this.isFormVisible = false;
    },
    submitForm() {
      // Обработка отправки формы
      console.log('Форма отправлена:', this.formData);
      this.closeForm();
    },
    async createTask() {
      try {
        await this.$axios.$post('/tasks', {
          title: this.title,
          description: this.description
        });
        this.$emit('task-created'); // Сообщаем родительскому компоненту о создании задачи
        this.title = ''; // Очищаем поля формы
        this.description = '';
      } catch (error) {
        console.error('Ошибка создания задачи:', error);
      }
    }
  }
};
</script>