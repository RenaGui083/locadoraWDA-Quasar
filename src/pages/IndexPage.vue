<template>
  <q-page class="flex flex-center">
    
    <div class="q-gutter-md" style="max-width: 300px">

      <q-input filled v-model="email" type = "email" label="Email" />
      <q-input filled v-model="password" type = "password" label="Senha" />
      <q-btn push color="primary" label="Entrar" />

    </div>

  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      text: ref('')
    }
  }
}

</script>
