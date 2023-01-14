<script setup>
  import { ref } from 'vue'
  import { supabase } from '../supabase'

  const loading = ref(false)
  const email = ref('')

  const handleLogin = async () => {
    try {
      loading.value = true
      const { error } = await supabase.auth.signInWithOtp({
        email: email.value,
      })
      if (error) throw error
      alert('Vérifie ta boîte mail pour obtenir le lien de connexion')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading.value = false
    }
  }
</script>

<template>
  <div class="bg-none lg:bg-[url('/public/Photo_IUT2.webp')] bg-cover bg-no-repeat w-screen py-40">
    <form class="flex justify-center items-center " @submit.prevent="handleLogin">
      <div class="py-6 w-screen lg:w-1/2 lg:bg-white flex flex-col justify-center items-center" >
        <h1 class=" text-Blue02 font-medium font-Montserrat text-xl">CONNEXION / INSCRIPTION</h1>
        <p></p>
        <div class="py-2">
          <input class="border-b border-black placeholder:text-Grey02  placeholder:font-Montserrat w-80"  type="email" placeholder="Entrez votre email" v-model="email" />
        </div>
        <div class="py-2">
          <input
            type="submit"
            :value="loading ? 'Loading' : 'Mail de confirmation envoyer'"
            :disabled="loading"
          />
        </div>
      </div>
    </form>
  </div>
</template>
