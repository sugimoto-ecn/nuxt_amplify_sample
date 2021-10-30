<template>
  <amplify-authenticator>
  </amplify-authenticator>
</template>


<script>
import { Hub } from 'aws-amplify'



export default {
  created() {
    Hub.listen('auth', this.listener)
  },
  destroyed() {
    Hub.remove('auth', this.listener)
  },
  methods: {
    listener(data){
      if(data.payload.event === 'signIn') {
        this.$router.push('/')
      }
    }
  }
}
</script>