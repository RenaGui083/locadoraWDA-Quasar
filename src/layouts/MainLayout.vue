<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>{{ t('sideBar.header') }}</q-toolbar-title>

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

const { t } = useI18n()

const linksList = [
  {
    title: t('sideBar.dashboard'),
    icon: 'insights',
    link: '/dashboard-quasar',
  },
  {
    title: t('sideBar.library'),
    icon: 'book',
    link: '/books-quasar',
  },
  {
    title: t('sideBar.rents'),
    icon: 'assignment',
    link: '/rents-quasar',
  },
  {
    title: t('sideBar.users'),
    icon: 'badge',
    link: '/users-quasar',
  },
  {
    title: t('sideBar.users'),
    icon: 'person',
    link: '/renters-quasar',
  },
  {
    title: t('sideBar.publishers'),
    icon: 'edit',
    link: '/publishers-quasar',
  },
  {
    title: t('sideBar.logout'),
    icon: 'logout',
    link: '/',
  },
]

const leftDrawerOpen = ref(false)
import logoImg from 'src/assets/logoLocadora.png'
import logoPreta from 'src/assets/logo-preta.png'
import { useI18n } from 'vue-i18n'
const logo = logoImg
const logoWDApreta = logoPreta

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
