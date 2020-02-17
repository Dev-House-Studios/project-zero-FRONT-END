<template>
  <div>
    <RoomForm />
    <h1 v-if="isConnected">CONNECTED</h1>
    <button @click="disconnect">Disconnect</button>
  </div>
</template>

<script>
import RoomForm from './components/RoomForm'
import { mapState, mapActions } from 'vuex'

export default {
  components: { RoomForm },
  computed: {
    ...mapState(['isConnected'])
  },
  methods: {
    ...mapActions(['disconnect'])
  }
}
</script>
