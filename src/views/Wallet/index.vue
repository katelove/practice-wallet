<template lang="">
    <div class="wallet-home">
        <Nav/>
        <section>
        <SecOne/>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </div>
</template>
<script>
import Nav from '@/components/Nav/index.vue'
import SecOne from '@/components/Wallet/SecOne.vue'
export default {
  name: 'WalletPage',
  components: {
    Nav,
    SecOne
  }

}
</script>
<style lang="scss" scope>
.wallet-home{
  width: 100%;
  section{
    height: 100%;
    width: 100%;
  }
}
</style>
