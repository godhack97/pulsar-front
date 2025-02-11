<!-- Авторизация / Логин -->
<template>
    <div>
        <h1>Вход</h1>
        <form @submit.prevent="login">
            <input v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Пароль" />
            <button type="submit">Войти</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                await this.$auth.loginWith('local', {
                    data: { email: this.email, password: this.password }
                });
                this.$router.push('/tasks');
            } catch (error) {
                alert('Неверный email или пароль');
            }
        }
    }
};
</script>