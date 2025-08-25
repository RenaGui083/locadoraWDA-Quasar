<template>
  <q-page class="flex flex-center">

    <div class="containerLogin">
      <div class="logoSection">
        <img :src="logo" alt="Logo" />
        <h1>Locadora de Livros</h1>
      </div>
      <div class="formLogin" style="max-width: 300px">
        <p>Bem-vindo(a) de volta!</p>
        <h1>Login</h1>
        <q-input filled v-model="email" type="email" label="Email" class="input" />
        <q-input filled v-model="password" type="password" label="Senha" class="input" />
        <q-btn push label="Entrar" id="botaoEntrar" />
        <p id="esqueceuSenhaLabel">Esqueceu a senha?</p>

      </div>

    </div>

  </q-page>
</template>
<script>
import { ref } from 'vue'
import logoImg from 'src/assets/logoLocadora.png'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const logo = logoImg

    return { email, password, logo }
  }
}
</script>