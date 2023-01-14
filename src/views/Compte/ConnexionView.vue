<script setup>
  import { onMounted, ref } from 'vue'
  import Account from '../../components/Account.vue'
  import Auth from '../../components/Auth.vue'
  import { supabase } from '../../supabase'

  const session = ref()

  onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
      session.value = data.session
    })

    supabase.auth.onAuthStateChange((_, _session) => {
      session.value = _session
    })
  })
</script>

<template>
  <div >
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
</template>
