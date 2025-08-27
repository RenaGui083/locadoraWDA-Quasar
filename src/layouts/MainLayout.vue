<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Locadora de Livros</q-toolbar-title>

        <div><img :src="logoWDApreta" alt="" id="toolBarImg"></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="sideBar">
      <q-list>
        <q-item-label header class="headerSideBar"><img :src="logo" alt=""> Admin </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    icon: 'insights',
    link: '/dashboard-quasar',
  },
  {
    title: 'Biblioteca',
    icon: 'book',
    link: '',
  },
  {
    title: 'Aluguéis',
    icon: 'assignment',
    link: '',
  },
  {
    title: 'Usuários',
    icon: 'badge',
    link: '',
  },
  {
    title: 'Locatários',
    icon: 'person',
    link: '',
  },
  {
    title: 'Editoras',
    icon: 'edit',
    link: '',
  },
  {
    title: 'Logout',
    icon: 'logout',
    link: '/',
  },
]

const leftDrawerOpen = ref(false)
import logoImg from 'src/assets/logoLocadora.png'
import logoPreta from 'src/assets/logo-preta.png'
const logo = logoImg
const logoWDApreta = logoPreta

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
