<template>
<q-select
  v-model="locale"
  :options="localeOptions"
  label="Idioma"
  dense
  borderless
  style="min-width: 150px"
/>
  <q-page class="flex flex-center" id="fundoLogin">

    <div class="containerLogin">
      <div class="left">
        <div class="logoSection">
          <img :src="logo" alt="Logo" />
          <header>Locadora de Livros</header>
        </div>
        <div class="formLogin" style="max-width: 300px">
          <p>{{ $t('login.welcome') }}</p>
          <header style="color: #F7B176;">{{ $t('login.title') }}</header>
          <q-input filled v-model="email" type="email" :label="$t('login.email')" class="input" />
          <q-input filled v-model="password" type="password" :label="$t('login.password')" class="input" />
          <q-btn push :label="$t('login.button')" to="/dashboard-quasar" id="logIn" />
          <router-link to="/forgot-password" id="forgotPasswordLabel">
            {{ $t('login.forgotPassword') }}
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
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import logoImg from 'src/assets/logoLocadora.png'
import logoWDAbranca from 'src/assets/logo.png'

const { locale } = useI18n({ useScope: 'global' })

const localeOptions = [
  { value: 'pt-BR', label: '🇧🇷 Português' },
  { value: 'en-US', label: '🇺🇸 English' },
  { value: 'es-ES', label: '🇪🇸 Español' }
]

const email = ref('')
const password = ref('')
const logo = logoImg
const logoWDA = logoWDAbranca
</script>