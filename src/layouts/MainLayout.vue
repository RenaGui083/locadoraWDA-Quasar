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
        <q-item-label header class="headerSideBar">

          <q-expansion-item class="avatar">
            <template v-slot:header="{ }">
              <q-item-section avatar>
                <q-avatar class="avatarImg">
                  <img :src="avatarSrc" id="avatarImg">
                </q-avatar>
              </q-item-section>

              <q-item-section class="profileSection">
                <div class="profileText">
                  <p class="nameProfile">Jhon Doe</p>
                  <p class="roleProfile">Administrador</p>
                </div>
              </q-item-section>
            </template>

            <q-card>

              <q-card-section class="flex flex-center column" id="expansionSelect">

                <!-- Seletor de avatares predefinidos -->
                <div class="preset-avatars row q-gutter-sm">
                  <q-avatar v-for="(preset, index) in presetAvatars" :key="index" size="48px" class="cursor-pointer"
                    @click="setPresetAvatar(preset)">
                    <img :src="preset" />
                  </q-avatar>
                </div>

                <!-- Input escondido -->
                <input ref="fileInput" type="file" accept="image/*" @change="handleFile" style="display: none" />

                <!-- Botão de upload -->
                <q-btn :label="t('avatarButton')" @click="triggerFile" color="primary" />
              </q-card-section>
            </q-card>
          </q-expansion-item>



        </q-item-label>

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
    title: t('sideBar.renters'),
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
// import logoImg from 'src/assets/logoLocadora.png'
import logoPreta from 'src/assets/logo-preta.png'
import { useI18n } from 'vue-i18n'
// const logo = logoImg
const logoWDApreta = logoPreta
const defaultAvatar = 'https://cdn.quasar.dev/img/boy-avatar.png'
const avatarSrc = ref(localStorage.getItem('userAvatar') || defaultAvatar)
const fileInput = ref(null)
const harry = 'src/assets/Harry Potter.jpg'
const hermione = 'src/assets/hermione granger.jpg'
const rony = 'src/assets/ron weasley.jpg'
const lucy = 'src/assets/lucy.jpg'
const percy = 'src/assets/percy jackson.jpg'
const bella = 'src/assets/Bellas.jpg'
const edward = 'src/assets/Edward.jpg'
const jacob = 'src/assets/jacob.jpg'

const presetAvatars = [
  harry, hermione, rony, lucy, percy, bella, edward, jacob
]



function triggerFile() {
  fileInput.value.click()
}

function handleFile(e) {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (ev) => {
    avatarSrc.value = ev.target.result
    localStorage.setItem('userAvatar', ev.target.result)
  }
  reader.readAsDataURL(file)
}

function setPresetAvatar(preset) {
  avatarSrc.value = preset
  localStorage.setItem('userAvatar', preset)
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
