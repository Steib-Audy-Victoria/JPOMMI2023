<script setup>
  import { supabase } from '../supabase'
  import { onMounted, ref, toRefs } from 'vue'

  const props = defineProps(['session'])
  const { session } = toRefs(props)

  const loading = ref(true)
  const username = ref('')
  const full_name = ref('')
  const classe = ref('')
  const stat = ref('')
  const avatar_url = ref('')

  onMounted(() => {
    getProfile()
  })

  async function getProfile() {
    try {
      loading.value = true
      const { user } = session.value

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, full_name, classe, stat, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) throw error

      if (data) {
        username.value = data.username
        full_name.value = data.full_name
        classe.value = data.classe
        stat.value = data.stat
        avatar_url.value = data.avatar_url
      }
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
  }

  async function updateProfile() {
    try {
      loading.value = true
      const { user } = session.value

      const updates = {
        id: user.id,
        username: username.value,
        full_name: full_name.value,
        classe: classe.value,
        stat: stat.value,
        avatar_url: avatar_url.value,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) throw error
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
  }

  async function signOut() {
    try {
      loading.value = true
      let { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
  }
</script>

<template>
  <div class="bg-none lg:bg-[url('/public/Photo_IUT2.webp')] bg-cover bg-no-repeat w-screen py-40">
    <form class="flex justify-center items-center " @submit.prevent="updateProfile">
      <div class="py-6 w-screen lg:w-1/2 lg:bg-white flex flex-col justify-center items-center">
        <h1 class=" text-Blue02 font-medium font-Montserrat text-xl">Détail du compte</h1>
        <div class="py-2">
          <label for="email">Email</label>
          <input class="border-b border-black w-80" id="email" type="text" :value="session.user.email" disabled />
        </div>
        <div class="py-2">
          <label for="username">Prénom</label>
          <input class="border-b border-black w-80" id="username" type="text" v-model="username" />
        </div>
        <div class="py-2">
          <label for="full_name">Nom</label>
          <input class="border-b border-black w-80" id="full_name" type="text" v-model="full_name" />
        </div>
        <div class="py-2">
          <label for="classe">Classe</label>
          <input class="border-b border-black w-80" id="classe" type="text" v-model="classe" />
        </div>
        <fieldset class="py-2">
          <legend>Choisissez votre statut</legend>
          <div>
            <label for="Schoix1">Etudiant</label>
            <input id="Schoix1" type="radio" name="stat" v-model="stat" />

            <label for="Schoix2">Professeur</label>
            <input id="Schoix2" type="radio" name="stat" checked v-model="stat" />
          </div>
        </fieldset>
        <div class="py-2">
          <input
            type="submit"
            class="button primary block"
            :value="loading ? 'Loading ...' : 'Mise à jour'"
            :disabled="loading"
          />
        </div>
        <div class="py-2">
          <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
        </div>
      </div>
    </form>
  </div>
</template>
