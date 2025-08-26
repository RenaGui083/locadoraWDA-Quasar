<template>
  <q-page class="flex flex-center" id="fundoRecSenha">

    <div class="containerLogin" id="containerRecSenha">
      <div class="left">
        <div class="logoSection">
          <img :src="logo" alt="Logo" />
          <header>Locadora de Livros</header>
        </div>
        <div class="formLogin" style="max-width: 300px" id="formRecSenha">
          <p>Esqueceu a senha?</p>
          <header style="color: #F7B176;">Recuperar senha</header>
          <q-input filled v-model="email" type="email" label="Email" class="input" />
          <div class="botoes">
            <q-btn push label="Continuar" id="botaoEntrar" /> <q-btn push label="Voltar" id="botaoVoltar" to="/"/>
          </div>
           <img :src="logoWDA" alt="">
        </div>
      </div>
      <div class="imagemLogin" id="imgRecSenha">
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