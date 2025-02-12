<!-- Авторизация / Логин -->
<template>
    <v-card class="authForm">
        <h1>Вход</h1>
        <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="email" required variant="solo-filled"></v-text-field>
            <v-text-field v-model="password" type="password" label="password" required
                variant="solo-filled"></v-text-field>
            <v-btn type="submit" color="primary">LogIn</v-btn>
        </v-form>
    </v-card>
</template>


<style>

.authForm{
    width: 470px;
    height: 300px;
    padding: 20px;
    top: 140px;
    align-content: center;
    margin: auto;
}

</style>
<script>
export default {
    async fetch() {
        await this.$store.dispatch('setTitle', 'LogIn');
    },
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
                alert(error);
            }
        }
    }
};
</script>