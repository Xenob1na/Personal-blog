<template>
    <section class="login">
        <div class="login__container container">
            <h1 class="login__title">Login</h1>
            <form @click.prevent="" class="login__form form">
                <div class="form__input-wrapper">
                    <label for="email" class="form__label"><b>Email</b></label>
                    <input type="email" class="form__input-email" v-model="user.email"/>
                </div>
                <div class="form__input-wrapper">
                    <label for="" class="form__label"><b>Password</b></label>
                    <input type="password" class="form__input-password" v-model="user.password"/>
                </div>
                <button class="form__button"  @click="login">Login</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../../stores/auth';

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const user = ref({
    email: '',
    password: ''
})

const router = useRouter();

const login = async () => {
    try {
        await authenticateUser(user.value);
        if (authenticated) {
            router.push('/admin')
        }
    } catch (error) {
        console.log(error)
    }
}
</script>