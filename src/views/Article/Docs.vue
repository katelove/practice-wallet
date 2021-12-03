/* eslint-disable import/no-webpack-loader-syntax */
<template lang="">
    <div>
        <div >{{word}}</div>
    </div>
</template>
<script>
import helloText from '@/views/docs/hello.js'
export default {
  data () {
    return {
      word: helloText.title
    }
    // eslint-disable-next-line indent
    }
//   methods: {
//     getPoemList () {
//       console.log({ helloText })
//     }
//   }
}
</script>
<style lang="">

</style>
