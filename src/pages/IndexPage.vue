<template>
  <q-page class="flex flex-center" id="fundoLogin">
    <div class="localeSelector">
      <q-select v-model="locale" :options="localeOptions" dense borderless style="min-width: 150px" @update:model-value="changeLocale" emit-value map-options/>
    </div>
    <div class="containerLogin">
      <div class="left">
        <div class="logoSection">
          <img :src="logo" alt="Logo" />
          <header>{{ t('login.bookRental') }}</header>
        </div>
        <div class="formLogin" style="max-width: 300px">
          <p>{{ t('login.welcome') }}</p>
          <header style="color: #F7B176;">{{ t('login.title') }}</header>
          <q-input filled v-model="email" type="email" :label="t('login.email')" class="input" />
          <q-input filled v-model="password" type="password" :label="t('login.password')" class="input" />
          <q-btn push :label="t('login.button')" to="/dashboard-quasar" id="logIn" />
          <router-link to="/forgot-password" id="forgotPasswordLabel">
            {{ t('login.forgotPassword') }}
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
import logoImg from 'src/assets/logoLocadora.png'
import logoWDAbranca from 'src/assets/logo.png'
import { useI18n } from 'vue-i18n'

const {  t, locale: i18nLocale } = useI18n()

const locale = ref(i18nLocale.value || 'pt-BR')



const localeOptions = [
  { label: '🇧🇷 Português', value: 'pt-BR' },
  { label: '🇺🇸 English', value: 'en-US' },
  { label: '🇪🇸 Español', value: 'es-ES' }
]

function changeLocale(newLocale) {
  if (typeof newLocale === 'string') {
    i18nLocale.value = newLocale
    localStorage.setItem('locale', newLocale)
  } else {
    console.warn('Locale inválido:', newLocale)
  }
}

const email = ref('')
const password = ref('')
const logo = logoImg
const logoWDA = logoWDAbranca
</script>