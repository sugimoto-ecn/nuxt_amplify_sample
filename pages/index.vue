<template>

<amplify-sign-out></amplify-sign-out>

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
      if(data.payload.event === 'signOut') {
        this.$router.push('/signin')
      }
    }
  }
}
</script>