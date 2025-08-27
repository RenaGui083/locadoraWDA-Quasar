<template>
  <q-page class="flex flex-center" id="fundoLogin">

    <div class="containerLogin">
      <div class="left">
        <div class="logoSection">
          <img :src="logo" alt="Logo" />
          <header>Locadora de Livros</header>
        </div>
        <div class="formLogin" style="max-width: 300px">
          <p>Bem-vindo(a) de volta!</p>
          <header style="color: #F7B176;">Login</header>
          <q-input filled v-model="email" type="email" label="Email" class="input" />
          <q-input filled v-model="password" type="password" label="Senha" class="input" />
          <q-btn push label="Entrar"  to="/dashboard-quasar" id="logIn" />
          <router-link to="/forgot-password" id="forgotPasswordLabel">
            Esqueceu a senha?
          </router-link>
           <img :src="logoWDA" alt="" class="logo">
        </div>
      </div>
      <div class="imgLogin" id="imgLogin">
         <img :src="logoWDA" alt="">
      </div>
    </div>

  </q-page>
</template>
<script>
import { ref } from 'vue'
import logoImg from 'src/assets/logoLocadora.png'
import logoWDAbranca from 'src/assets/logo.png'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const logo = logoImg
    const logoWDA = logoWDAbranca

    return { email, password, logo, logoWDA }
  }
}
</script>